def convert(user_string):
  vowels = ["a", "e", "i", "o", "u", "y", "w"]
  next_2 = ["ya", "ye", "yo", "yu"]
  next_3 = ["yaw", "ywa", "yoe"]

  cons = "pbtdkgxɣqGhʁfvszšžcjrlmnŋyVRXZN"


  key = {
      "a": "a",
      "E": "ə",
      "e": "ɯ",
      "i": "i",
      "o": "ɔ",
      "u": "u",  # double check
      "ai": "aj",
      "aw": "ɑw",
      "ei": "ɜw",
      "ew": "əɔ",
      "ya": "QY",  #double check
      "ae": "æ",
      "ye": "QY",
      "yo": "QY",  #double check
      "yu": "QY",
      "oi": "ɔj",  #double check
      "wa": "ʷɑ",  #double check
      "oe": "œ",
      "wo": "ʷɜ",
      "ui": "uj",
      "yaw": "QY",
      "yew": "ʲɜw",
      "ywa": "QY",
      "yoe": "QY",
      "w": "ʷ",
      "y": "ʲ",
      "p": "pʰ",
      "b": "b",
      "t": "tʰ",
      "d": "t",
      "k": "k",
      "g": "ɡ",
      "x": "x",
      "ɣ": "ɣ",
      "V": "ɣ",
      "q": "q",
      "G": "G",
      "h": "χ",
      "ʁ": "ʁ",
      "R": "ʁ",
      "f": "f",
      "v": "v",
      "š": "ʂ",
      "X": "ʂ",
      "ž": "ʐ",
      "Z": "ʐ",
      "r": "r",
      "l": "l",  # double check
      "m": "m",
      "n": "n",
      "ŋ": "ŋ",
      "N": "ŋ",
      "dz": "ts",  #double check
      "ts": "tsʰ",  #double check
      "s": "RULE",
      "c": "RULE",
      "j": "RULE",
  }

  rules_key = {
      "s": {
          "i_rule": "ɕ",
          "everyw_else": "s"
      },
      "c": {
          "i_rule": "tʃ",
          "everyw_else": "ʈʂ"
      },
      "j": {
          "i_rule": "dʒ",  #double check
          "everyw_else": "ɖʐ"
      }
  }

  qy_key = {
    "ya": {
      "everyw_else": "ja",
      "cons_rule":"ʲa"
    },

    "ye": {
      "everyw_else": "je",
      "cons_rule":"ʲe"
    },

    "yo": {
      "everyw_else": "jɔ",
      "cons_rule":"ʲɔ"
    },

    "yu": {
      "everyw_else": "jy",
      "cons_rule":"ʲy"
    },

    "yaw": {
      "everyw_else": "jɑw",
      "cons_rule":"ʲɑw"
    },

    "ywa": {
      "everyw_else": "ɥa",
      "cons_rule":"ʲʷa"
    },

    "yoe": {
      "everyw_else": "jœ",
      "cons_rule":"ʲœ"
    }

  }


  def split_word(sentence):
      words = sentence.split()
      return words


  def split_letters(word):
      letters_in_word = []
      for letter in letters_in_word:
          letters_in_word.append(letter)
      return letters_in_word


  def look(lst, ct, val, comb=False):
      try:
          if comb:
              output = []
              for i in range(ct, val + 1):
                  output.append(lst[i])
              return "".join(output)
          else:
              if (ct == 0) and (val == -1):
                return "NONE"
              else:
                return lst[ct + val]
      except IndexError:
          return ""
  word_list = user_string.split()
  output = []
  for word in word_list:
      letters_list = [letter for letter in word]
      new_word = []
      count = 0
      for letter in letters_list:
          if count == len(letters_list):
              break
          else:
              letter = letters_list[count]
              if letter not in vowels:
                  if (letter == "d") and (look(letters_list, count, 1) == "z"):
                      ipa_letter = key["dz"]
                      count += 2
                  elif (letter == "t") and (look(letters_list, count, 1) == "s"):
                      ipa_letter = key["ts"]
                      count += 2
                  elif letter in ["s", "c", "j"]:
                      if (look(letters_list, count, 1) == "i"):
                          ipa_letter = rules_key[letter]["i_rule"]
                          count += 1
                      else:
                          ipa_letter = rules_key[letter]["everyw_else"]
                          count += 1
                  elif letter in key:
                      ipa_letter = key[letter]
                      count += 1
                  else:
                      ipa_letter = letter
                      count +=1
              elif letter in vowels:
                  if count != 0:
                    last_letter = look(letters_list, count, -1)
                  else:
                    last_letter = "a"
                  next_letter = look(letters_list, count, 1)
                  nnext_letter = look(letters_list, count, 2)           
                  next_combo = letter + next_letter
                  nnext_combo = letter + next_letter + nnext_letter
                  if next_letter in vowels:
                      if nnext_letter in vowels:  #triphthong
                          if nnext_combo in next_3:
                              if (last_letter in cons) or (last_letter == "NONE"):
                                ipa_letter = qy_key[nnext_combo]["cons_rule"]
                              else:
                                ipa_letter = qy_key[nnext_combo]["everyw_else"]
                              count += 3
                          elif nnext_combo in key:
                            ipa_letter = key[nnext_combo]
                            count += 3
                          elif next_combo in next_2:
                              if (last_letter in cons) or (last_letter == "NONE"):
                                ipa_letter = qy_key[next_combo]["cons_rule"]
                              else:
                                ipa_letter = qy_key[next_combo]["everyw_else"]
                              count += 2
                          elif letter in key:
                              ipa_letter = key[letter]
                              count += 1
                      else:
                          if next_combo in next_2:
                              if (last_letter in cons) or (last_letter == "NONE"):
                                ipa_letter = qy_key[next_combo]["cons_rule"]
                              else:
                                ipa_letter = qy_key[next_combo]["everyw_else"]
                              count += 2
                          elif next_combo in key:
                              ipa_letter = key[next_combo]
                              count += 2
                          elif letter in key:
                              ipa_letter = key[letter]
                              count += 1
                  else:
                    if letter in key:
                        ipa_letter = key[letter]
                    else:
                        ipa_letter = letter
                    count += 1
              new_word.append(ipa_letter)
      output.append("".join(new_word))
  return " ".join(output)

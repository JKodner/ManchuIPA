function convert (user_string) {
	var vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'w'];
	var next_2 = ['ya', 'ye', 'yo', 'yu'];
	var next_3 = ['yaw', 'ywa', 'yoe'];
	var cons = 'pbtdkgxɣqGhʁfvszšžcjrlmnŋyVRXZN';
	var key = {
		"a": "a",
		"E": "ə",
		"e": "ɯ",
		"i": "i",
		"o": "ɔ",
		"u": "u",  
		"ai": "aj",
		"aw": "ɑw",
		"ei": "ɜw",
		"ew": "əɔ",
		"ya": "QY",  
		"ae": "æ",
		"ye": "QY",
		"yo": "QY",  
		"yu": "QY",
		"oi": "ɔj",  
		"wa": "ʷɑ",  
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
		"l": "l",  
		"m": "m",
		"n": "n",
		"ŋ": "ŋ",
		"N": "ŋ",
		"dz": "ts",  
		"ts": "tsʰ",  
		"s": "RULE",
		"c": "RULE",
		"j": "RULE",
	}
  
	var rules_key = {
		"s": {
			"i_rule": "ɕ",
			"everyw_else": "s"
		},
		"c": {
			"i_rule": "tʃ",
			"everyw_else": "ʈʂ"
		},
		"j": {
			"i_rule": "dʒ",  
			"everyw_else": "ɖʐ"
		}
	}
  
	var qy_key = {
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
	
	var split_word = function (sentence) {
		var words = sentence.py_split ();
		return words;
	};
	var split_letters = function (word) {
		var letters_in_word = [];
		for (var letter of letters_in_word) {
			letters_in_word.append (letter);
		}
		return letters_in_word;
	};
	var look = function (lst, ct, val, comb) {
		if (typeof comb == 'undefined' || (comb != null && comb.hasOwnProperty ("__kwargtrans__"))) {;
			var comb = false;
		};
		try {
			if (comb) {
				var output = [];
				for (var i = ct; i < val + 1; i++) {
					output.append ();
				}
				return ''.join (output);
			}
			else if (ct == 0 && val == -(1)) {
				return 'NONE';
			}
			else {
				return ;
			}
		}
		catch (__except0__) {
			if (isinstance (__except0__, IndexError)) {
				return '';
			}
			else {
				throw __except0__;
			}
		}
	};
	var word_list = user_string.py_split ();
	var output = [];
	for (var word of word_list) {
		var letters_list = (function () {
			var __accu0__ = [];
			for (var letter of word) {
				__accu0__.append (letter);
			}
			return __accu0__;
		}) ();
		var new_word = [];
		var count = 0;
		for (var letter of letters_list) {
			if (count == len (letters_list)) {
				break;
			}
			else {
				var letter = letters_list[count];
				if (!__in__ (letter, vowels)) {
					if (letter == 'd' && look (letters_list, count, 1) == 'z') {
						var ipa_letter = key["dz"];
						count += 2;
					}
					else if (letter == 't' && look (letters_list, count, 1) == 's') {
						var ipa_letter = key["ts"];
						count += 2;
					}
					else if (__in__ (letter, ['s', 'c', 'j'])) {
						if (look (letters_list, count, 1) == 'i') {
							var ipa_letter = rules_key[letter]["i_rule"];
							count += 1;
						}
						else {
							var ipa_letter = rules_key[letter]["everyw_else"];
							count += 1;
						}
					}
					else if (__in__ (letter, key)) {
						var ipa_letter = key[letter];
						count += 1;
					}
					else {
						var ipa_letter = letter;
						count += 1;
					}
				}
				else if (__in__ (letter, vowels)) {
					if (count != 0) {
						var last_letter = look (letters_list, count, -(1));
					}
					else {
						var last_letter = 'a';
					}
					var next_letter = look (letters_list, count, 1);
					var nnext_letter = look (letters_list, count, 2);
					var next_combo = letter + next_letter;
					var nnext_combo = (letter + next_letter) + nnext_letter;
					if (__in__ (next_letter, vowels)) {
						if (__in__ (nnext_letter, vowels)) {
							if (__in__ (nnext_combo, next_3)) {
								if (__in__ (last_letter, cons) || last_letter == 'NONE') {
									var ipa_letter = qy_key[nnext_combo]["cons_rule"];
								}
								else {
									var ipa_letter = qy_key[nnext_combo]["everyw_else"];
								}
								count += 3;
							}
							else if (__in__ (nnext_combo, key)) {
								var ipa_letter = key[nnext_combo];
								count += 3;
							}
							else if (__in__ (next_combo, next_2)) {
								if (__in__ (last_letter, cons) || last_letter == 'NONE') {
									var ipa_letter = qy_key[next_combo]["cons_rule"];
								}
								else {
									var ipa_letter = qy_key[next_combo]["everyw_else"];
								}
								count += 2;
							}
							else if (__in__ (letter, key)) {
								var ipa_letter = key[letter];
								count += 1;
							}
						}
						else if (__in__ (next_combo, next_2)) {
							if (__in__ (last_letter, cons) || last_letter == 'NONE') {
								var ipa_letter = qy_key[next_combo]["cons_rule"];
							}
							else {
								var ipa_letter = qy_key[next_combo]["everyw_else"];
							}
							count += 2;
						}
						else if (__in__ (next_combo, key)) {
							var ipa_letter = key[next_combo];
							count += 2;
						}
						else if (__in__ (letter, key)) {
							var ipa_letter = key[letter];
							count += 1;
						}
					}
					else {
						if (__in__ (letter, key)) {
							var ipa_letter = key[letter];
						}
						else {
							var ipa_letter = letter;
						}
						count += 1;
					}
				}
				new_word.append (ipa_letter);
			}
		}
		output.append (''.join (new_word));
	}
	return ' '.join (output);
};

console_log(convert("hi"))
//# sourceMappingURL=hello.map
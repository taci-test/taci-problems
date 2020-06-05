function removeFromString(str, index, num) {

    var newStr = "";
    for (var i = 0; i < str.length; i++) {

      if (i < index || i >=  (index + num)) {
        newStr = newStr + str[i];
      }
    }
    console.log(newStr);
    return newStr;
  }
  removeFromString('Elie', 2, 2) // 'El'
  removeFromString('Elie', 0, 1) // 'lie'
  removeFromString('Rithm School', 0, 6) // 'School'
  removeFromString('Rithm School', 2, 4) // 'RiSchool'
  removeFromString('Rithm School', 6, 400) // 'Rithm




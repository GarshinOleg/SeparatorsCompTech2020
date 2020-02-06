class UI {
  constructor() {
    this.table_body = document.getElementById("table_body");
  }

  sort(array) {
    array.sort(function(a, b) {
      return b - a;
    });
    return array;
  }

  findNumOfFlag(possibility)

  func(numOfColumn) {
    switch ((row_jsonObj, numOfColumn)) {
      case 0:
        tableRowsCollctn.children[numOfColumn].textContent =
          row_jsonObj.id_device;
        break;
      case 1:
        tableRowsCollctn.children[numOfColumn].textContent = row_jsonObj.time;
        break;
      case 2:
        {
          if (row_jsonObj.type_flag === 0)
            tableRowsCollctn.children[numOfColumn].textContent = "левый";
          else {
            tableRowsCollctn.children[numOfColumn].textContent = "правый";
          }
        }
        break;
      case 3:
        {
          sort(row_jsonObj.positions);
          tableRowsCollctn.children[numOfColumn].textContent = positions[0];
          findNumOfFlag(positions[0]);
        }
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
    }
  }

  paint(data) {
    var tableRowsCollctn = this.table_body.children;

    for (var i = 0; i < tableRowsCollctn.length; i++) {
      //цикл по <tr> тэгам
      for (var j = 0; j < tableRowsCollctn.children.length; j++) {
        //цикл по <td> тэгам их 7 штук, здесь switch case
        tableRowsCollctn.children[j].textContent = i + 1;
      }
    }

    console.log(curValue);
  }
}

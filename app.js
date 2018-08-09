var p = "997";
var len = p.length;
var arr = [];
var a = 1;
function factor (len) {
  if (len == 0) {
    return a;
  }
  a *= len;
  factor(len-1);
}
factor(len);
for (let i = 0; i < p.length; ++i) {
  arr[i] = p[i];
}

function FindTheSimpleNumbers (arr, a) {
  var leng = arr.length;
  var j = leng - 2;
  var k = leng - 1;
  var d;
 for (let i = 0; i < a; ++i) {
   if (j == -1) {
     var j = leng - 2;
     var k = leng - 1;
   }
    d = arr[j];
    arr[j] = arr[k];
    arr[k] = d;
    var parse = arr.join("");
    var parseArr = Number(parse);
    for (let i = parseArr - 1; i > 1; --i) {
      if (parseArr % i == 0) {
        console.log("The number is complex");
        console.log(parseArr + " / " + i + " = " + parseArr/i);
        return;
      }
    }
    --j;
    --k;
  }
  console.log("The number is simple");
}

FindTheSimpleNumbers (arr, a);

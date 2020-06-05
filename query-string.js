function toQueryString(obj) {

    var output = "";

    for (var key in obj) {

        var isArr = Array.isArray(obj[key]);
        var value = obj[key];

        if (!(isArr)) {
            output = output + `${key}=${value}&`;
        }
        if (isArr) {
            for (var i = 0; i < value.length; i++) {
                output = output + `${key}=${value[i]}&`;
                
            }
        }    
    }
    output = output.slice(0, output.length - 1);
    
    console.log("output", output);

    return output;

    
}

// toQueryString({}) // ""
// toQueryString({"bar": [ 2, 3], "foo": 1 }) // "bar=2&bar=3&foo=1"
toQueryString({name: "Elie", "nums": [1,2,3,4]}) // "name=Elie&nums=1&nums=2&nums=3&nums=4"

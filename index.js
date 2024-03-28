// var url = "https://cute-jade-binturong-boot.cyclic.app/api";

// var get_flovers = (search) => {
//   fetch(`${url}/flower/category?access_token=64bebc1e2c6d3f056a8c85b7`, {
//     method: "GET",
//   })
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => {
//       var id = data.data.filter((value) => {
//         return value.title.includes(search);
//       });
//       console.log(id);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// get_flovers("Plants");

//////////////////////////////////////////////////

var url = "https://cute-jade-binturong-boot.cyclic.app/api";

var get_flovers = async (search) => {
  var response = await fetch(
    `${url}/flower/category?access_token=64bebc1e2c6d3f056a8c85b7`
  );

  var data = await response.json();

  var found_data = data.data.filter((value) => {
    return value.title.includes(search);
  });

  if (found_data.lenght === 0) {
    console.log("gul topilmadi");
  } else {
    for (let i = 0; i < found_data.length; i++) {
      console.log(found_data[i].title);
    }
    //   console.log(found_data);
  }
};

get_flovers("Plants");

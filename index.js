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

var url = "https://cute-jade-binturong-boot.cyclic.app/";

var get_flovers = async (search) => {
  var response = await fetch(
    `${url}api/flower/category?access_token=64bebc1e2c6d3f056a8c85b7`
  );

  var data = await response.json();

  var found_data = data.data.filter((value) => {
    return value.title.includes(search);
  });

  // console.log(found_data);
  if (found_data.length === 0) {
    console.log("gul topilmadi");
  } else {
    console.log(
      found_data.map(({ title, count, created_at }) => {
        return { title, count, created_at };
      })
    );
    // for (let i = 0; i < found_data.length; i++) {
    //   console.log(found_data[i].title);
    // }
  }
};

get_flovers("Plants");

/////////

// var data = [
//   // { name: "azim", surname: "turakulov", age: "25" },
//   // { name: "sardor", surname: "suyunov", age: "27" },
//   // { name: "husan", surname: "muhiddinov", age: "17" },
//   ["a", [[[[[["b"]]]]]], "c"],
//   ["k", [[[[[["h"]]]]]], "s"],
//   ["w", [[[[[["j"]]]]]], "d"],
// ];

// data.map(([bir, ikki, uch], index, array) => {
//   console.log(ikki.flat(Infinity)[0]);
// });

// var { name, surname, age } = data;

/////

// var url = "https://cute-jade-binturong-boot.cyclic.app/api";
// var onAuth = async ({ name, surname, password, email }) => {
//   var response = await fetch(
//     `${url}/user/sign-up?access_token=64bebc1e2c6d3f056a8c85b7`,
//     {
//       method: "POST",
//       body: JSON.stringify({
//         name: name,
//         surname: surname,
//         password: password,
//         email: email,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   var data = await response.json();
//   console.log(data);
// };

// onAuth({
//   name: "azimjon",
//   surname: "turakulov",
//   password: "123456789",
//   email: "azimjonturkulob23m@gmail.com",
// });

/////
// var onAuthIn = async ({ password, email }) => {
//   console.log("xush kelibsiz");
//   var response = await fetch(
//     `${url}/user/sign-in?access_token=64bebc1e2c6d3f056a8c85b7`,
//     {
//       method: "POST",
//       body: JSON.stringify({
//         password: password,
//         email: email,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   var data = await response.json();
//   console.log(data);
// };

// onAuthIn({
//   password: "123456789",
//   email: "azimjonturkulob23m@gmail.com",
// });

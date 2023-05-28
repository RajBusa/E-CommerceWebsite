let mainContainer = document.getElementById("mainContainer");
let containerClothing = document.getElementById("containerClothing");
let containerAccessories = document.getElementById("containerAccessories");

const jsonData =[
  {
      "name": "Men Navy Blue Solid Sweatshirt",
      "photo": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
      "brand": "United Colors of Benetton",
      "affiliatelink": "https://amzn.to/3ovwI1E"
  },
  {
      "name": "Men Black MAMGP T7 Sweat Sporty Jacket",
      "photo": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg",
      "description": "Black solid sporty jacket, has a mock collar, 3 pockets, zip closure, long sleeves, straight hem, unlined lining",
      "brand": "Puma",
      "affiliatelink": "https://amzn.to/3ovwI1E"
  },
  {
      "name": "Men Black Action Parkview Lifestyle Shoes",
      "photo": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg",
      "description": "Flaunt an effortless look with this ultimate pair of black coloured formal shoes from the house of Hush Puppies.",
      "brand": "Hush Puppies",
      "affiliatelink": "https://amzn.to/3ovwI1E"
  },
  {
      "name": "Women Black Solid Lightweight Leather Jacket",
      "photo": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg",
      "description": "Black solid leather jacket, has a spread collar, 3 pockets, zip closure, long sleeves, straight hem, polyester lining",
      "brand": "BARESKIN",
      "affiliatelink": "https://amzn.to/3ovwI1E"
  },
  {
      "name": "Women Blue Solid Shirt Dress",
      "photo": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg",
      "description": "Blue solid woven shirt dress, has a shirt collar, sleeveless, button closure, flared hem",
      "brand": "SASSAFRAS",
      "affiliatelink": "https://amzn.to/3ovwI1E"
  }
]

function dynamicClothingSection(ob) {
  let boxDiv = document.createElement("div");
  boxDiv.id = "box";

  let boxLink = document.createElement("a");

  let imgTag = document.createElement("img");
  imgTag.src = ob.photo;

  let detailsDiv = document.createElement("div");
  detailsDiv.id = "details";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(ob.name);
  h3.appendChild(h3Text);

  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode(ob.description);
  h4.appendChild(h4Text);

  let buttonDiv = document.createElement('div')
  buttonDiv.id = 'button'

  let buttonTag = document.createElement('button')
  buttonTag.addEventListener("click", function () {
    window.location.href = ob.affiliatelink;
  });
  buttonDiv.appendChild(buttonTag)
  buttonText = document.createTextNode('Purchase')

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(buttonTag);
  buttonTag.appendChild(buttonText);

  return boxDiv;
}

for (let i = 0; i < jsonData.length; i++) {
  containerAccessories.appendChild(
    dynamicClothingSection(jsonData[i])
  );
}


const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
     {
      id: 10,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    }
  ];
  /*
  var dizi=["All","Japan","Korea","China"];
   var body = document.getElementById('filterbtn');
  for(let i=0;i<dizi.length;i++){
     var btn = document.createElement("button");
       btn.innerText= dizi[i];
       btn.value=dizi[i];
  
       body.appendChild(btn);
     //  document.body.appendChild(btn);
  }
  */
  
  var btn2=document.getElementById("btn2");
    btn2.onclick=function(){
      var kategori=btn2.value;
      console.log(kategori);
     genel(kategori) ; // kategori verisini yolla
  
  }
  var btn=document.getElementById("btn");
    btn.onclick=function(){
      var kategori=btn.value;
      console.log(kategori);
     genel(kategori) ; // kategori verisini yolla
  
  }
  
  var btn1=document.getElementById("btn1");
    btn1.onclick=function(){
      var kategori=btn1.value;
      console.log(kategori);
     genel(kategori) ; // kategori verisini yolla
  
  }
  
  var all=document.getElementById("all");
    all.onclick=function(){
      card.innerHTML = "";
  div=document.getElementById('card');
  let count =menu.length;
      for(let i in menu){
       let title=menu[i].title;
       let card='<div class="card p-1 mx-5 my-2  " style="width: 15rem;"><img class="card-img-top  my-3" src=' + `${menu[i].img}` + ' alt="Card image cap"><div class="card-body" <h2 class="card-title  ">#' + `${menu[i].title}` + '</h2> <p >' + `${menu[i].desc}` + ' </p><p style="color:red  " class="w-100">' + `${menu[i].price}` + ' </p></div></div>'  
       div.insertAdjacentHTML("beforeend",card);
    }
  
  
  }
   function genel(kategori){
    card.innerHTML = "";
  div=document.getElementById('card');
  let count =menu.length;
    for(let i in menu){
      console.log(menu[i].img)
    if(menu[i].category == kategori){
       let title=menu[i].title;
        let card='<div class="card mx-5 my-2" style="width: 15rem;"><img class="card-img-top  my-3" src=' + `${menu[i].img}` + ' alt="Card image cap"><div class="card-body" <h2 class="card-title" ># ' + `${menu[i].title}` + '</h2><p >' + `${menu[i].desc}` + ' </p><p style="color:red">' + `${menu[i].price}` + ' </p></div></div>'  
   div.insertAdjacentHTML("beforeend",card);
  
  
    }
    }
    
   }
  
  
   
  
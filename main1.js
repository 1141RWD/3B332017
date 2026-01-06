// Slider
let index=0;
let currentProduct = null;
let lastSection = "home";
const slides=document.querySelectorAll(".slide");
function changeSlide(n){
 slides[index].classList.remove("active");
 index=(index+n+slides.length)%slides.length;
 slides[index].classList.add("active");
}
setInterval(()=>changeSlide(1),4000);

// SPA 切頁
function showPage(id){
 document.querySelectorAll("section,.slider").forEach(p=>p.classList.remove("active"));
 document.getElementById(id).classList.add("active");
 closeMenu();
}

// 子選單跳到商品
function goTo(sectionId, productId){
 showPage(sectionId);
 setTimeout(()=>document.getElementById(productId)?.scrollIntoView({behavior:"smooth"}),200);
}

// 漢堡選單
function toggleMenu(){document.getElementById("menu").classList.toggle("show");}
function closeMenu(){document.getElementById("menu").classList.remove("show");}


/* 商品資料庫 */
const products = {
  l1:{
  name:"罐頭LULU豬繽紛樂園系列",
  price:399,
  img:"img/lulu豬(繽紛樂園系列).webp",
  imgs:[
    "img/繽紛樂園系列1.webp",
    "img/繽紛樂園系列2.webp",
    "img/繽紛樂園系列3.webp",
    "img/繽紛樂園系列4.webp",
    "img/繽紛樂園系列5.webp",
    "img/繽紛樂園系列6.webp",
    "img/繽紛樂園系列7.webp",
    "img/繽紛樂園系列8.webp",
    "img/繽紛樂園系列9.webp",
    "img/繽紛樂園系列10.webp"
        ]
        },
  l2:{name:"罐頭LULU豬lu家小館系列",
  price:399,
  img:"img/lulu豬(lu家小館系列).webp",
  imgs:[
    "img/lu家小館系列1.webp",
    "img/lu家小館系列2.webp",
    "img/lu家小館系列3.webp",
    "img/lu家小館系列4.webp",
    "img/lu家小館系列5.webp",
    "img/lu家小館系列6.webp",
    "img/lu家小館系列7.webp",
    "img/lu家小館系列8.webp",
    "img/lu家小館系列9.webp",
  ]},
  l3:{name:"罐頭LULU豬動物派對系列",
  price:399,
  img:"img/lulu豬(動物派對系列).webp",
    imgs:[
        "img/派對動物系列1.webp",
        "img/派對動物系列2.webp",
        "img/派對動物系列3.webp",
        "img/派對動物系列4.webp",
        "img/派對動物系列5.webp",
        "img/派對動物系列6.webp",
        "img/派對動物系列7.webp",
        "img/派對動物系列8.webp",
        "img/派對動物系列9.webp",
        "img/派對動物系列10.webp",
        "img/派對動物系列11.webp",
        "img/派對動物系列12.webp",
    ]},
  l4:{name:"罐頭LULU豬旅行系列",
  price:399,
  img:"img/lulu豬(旅行系列).webp",
    imgs:[
            "img/旅行系列1.webp",
            "img/旅行系列2.webp",
            "img/旅行系列3.webp",
            "img/旅行系列4.webp",
            "img/旅行系列5.webp",
            "img/旅行系列6.webp",
            "img/旅行系列7.webp",
        ]},
  l5:{name:"罐頭LULU豬歡樂時光系列",
  price:399,
  img:"img/lulu豬(歡樂時光系列).webp",
    imgs:[
            "img/歡樂時光系列1.webp",
            "img/歡樂時光系列2.webp",
            "img/歡樂時光系列3.webp",
            "img/歡樂時光系列4.webp",
            "img/歡樂時光系列5.webp",
            "img/歡樂時光系列6.webp",
            "img/歡樂時光系列7.webp",
            "img/歡樂時光系列8.webp",
            "img/歡樂時光系列9.webp",
            ]},
  l6:{name:"罐頭LULU豬聖誕小鎮系列",
  price:399,
  img:"img/lulu豬(聖誕小鎮系列).webp",
    imgs:[
            "img/聖誕小鎮系列1.webp",
            "img/聖誕小鎮系列2.webp",
            "img/聖誕小鎮系列3.webp",
            "img/聖誕小鎮系列4.webp",
            "img/聖誕小鎮系列5.webp",
            "img/聖誕小鎮系列6.webp",
        ]},
  l7:{name:"罐頭LULU豬農場系列",
  price:399,
  img:"img/lulu豬(農場系列).webp",
    imgs:[
            "img/農場系列1.webp",
            "img/農場系列2.webp",
            "img/農場系列3.webp",
            "img/農場系列4.webp",
            "img/農場系列5.webp",
            "img/農場系列6.webp",
            "img/農場系列7.webp",
        ]},
  l8:{name:"罐頭LULU豬陽光派對系列",
  price:399,
  img:"img/lulu豬(陽光派對系列).webp",
    imgs:[
            "img/陽光派對系列1.webp",
            "img/陽光派對系列2.webp",
            "img/陽光派對系列3.webp",
            "img/陽光派對系列4.jpg",
            "img/陽光派對系列5.webp",
            "img/陽光派對系列6.webp",
            "img/陽光派對系列7.webp",
            "img/陽光派對系列8.webp",
        ]},

  // 星星人
  t1:{name:"123！星星人系列",
  price:399,
  img:"img/123!來自星星人系列.jpg",
    imgs:[
            "img/123星星人系列1.jpg",
            "img/123星星人系列2.jpg",
            "img/123星星人系列3.jpg",
            "img/123星星人系列4.jpg",
            "img/123星星人系列5.jpg",
            "img/123星星人系列6.webp",
            "img/123星星人系列7.webp",
            "img/123星星人系列8.jpg",
            ]},
  t2:{name:"來自星星的禮物系列",
  price:399,
  img:"img/來自星星的禮物系列.png",
imgs:[
        "img/來自星星的禮物系列1.jpg",
        "img/來自星星的禮物系列2.jpg",
        "img/來自星星的禮物系列3.jpg",
        "img/來自星星的禮物系列4.jpg",
        "img/來自星星的禮物系列5.webp",
        "img/來自星星的禮物系列6.webp",
        "img/來自星星的禮物系列7.jpg",
        ]},
  t3:{name:"星星人的美味時刻系列",
  price:399,
  img:"img/星星人的美味時刻系列.png",
    imgs:[
            "img/美味時刻系列1.jpg",
            "img/美味時刻系列2.jpg",
            "img/美味時刻系列3.jpg",
            "img/美味時刻系列4.jpg",
            "img/美味時刻系列5.jpg",
            "img/美味時刻系列6.jpg",
            "img/美味時刻系列7.jpg",
            "img/美味時刻系列8.jpg",
            "img/美味時刻系列9.jpg",
            "img/美味時刻系列10.jpg",
            "img/美味時刻系列11.jpg",
            "img/美味時刻系列12.jpg",
            ]},
  t4:{name:"星星人隨心配系列",
  price:399,
  img:"img/星星人隨心配系列.jpg",
    imgs:[
            "img/隨心配系列1.jpg",
            "img/隨心配系列2.jpeg",
         ]},
  t5:{name:"星星人隨心配A系列",
  price:399,
  img:"img/星星人隨心配系列A.jpg",
    imgs:[
            "img/隨心配A系列1.jpg",
            "img/隨心配A系列2.jpg",
            "img/隨心配A系列3.jpg",
        ]},
  t6:{name:"我們都是星星人系列",
  price:399,
  img:"img/我們都是星星人.jpg",
    imgs:[
            "img/我們都是星星人系列1.jpg",
            "img/我們都是星星人系列2.jpg",
            "img/我們都是星星人系列3.jpg",
            "img/我們都是星星人系列4.jpg",
            "img/我們都是星星人系列5.jpg",
            "img/我們都是星星人系列6.webp",
            "img/我們都是星星人系列7.webp",
            ]},
  t7:{name:"星星人迷你包掛件盲盒系列",
  price:399,
  img:"img/星星人迷你包掛件盲盒.jpg",
    imgs:[
            "img/迷你掛件盲盒1.jpg",
            "img/迷你掛件盲盒2.jpg",
        ]},
  t8:{name:"星星人毛絨掛件盲盒系列",
  price:399,
  img:"img/星星人毛絨掛件盲盒.jpg",
    imgs:[
            "img/絨毛掛件盲盒1.jpg",
            "img/絨毛掛件盲盒2.jpg",
        ]},

  // LABUBU
  L1:{name:"LABUBU 可口可樂系列",
  price:399,
  img:"img/labubu(可口可樂系列).png",
    imgs:[
            "img/可口可樂系列1.jpg",
            "img/可口可樂系列2.jpg",
            "img/可口可樂系列3.jpg",
            "img/可口可樂系列4.jpg",
            "img/可口可樂系列5.jpg",
        ]},
  L2:{name:"LABUBU 前方高能系列",
  price:399,
  img:"img/labubu(前方高能系列).png",
    imgs:[
            "img/前方高能系列1.jpg",
            "img/前方高能系列2.jpg",
            "img/前方高能系列3.jpg",
            ]},
  L3:{name:"LABUBU 航海王系列",
  price:399,
  img:"img/labubu(航海王系列).png",
    imgs:[
            "img/航海王系列1.jpg",
            "img/航海王系列2.jpg",
            "img/航海王系列3.jpg",
            "img/航海王系列4.jpg",
            "img/航海王系列5.jpg",
        ]},
  L4:{name:"LABUBU 一起玩遊戲系列",
  price:399,
  img:"img/labubu一起玩遊戲系列.jpg",
    imgs:[
            "img/一起玩遊戲系列1.jpg",
            "img/一起玩遊戲系列2.jpg",
            "img/一起玩遊戲系列3.jpg",
            "img/一起玩遊戲系列4.jpg",
            "img/一起玩遊戲系列5.jpg",
            "img/一起玩遊戲系列6.jpg",
            "img/一起玩遊戲系列7.jpg",
        ]},
  L5:{name:"LABUBU 頑皮日記系列",
  price:399,
  img:"img/labubu頑皮日記系列.jpg",
    imgs:[
            "img/頑皮日記系列1.jpg",
            "img/頑皮日記系列2.jpg",
            "img/頑皮日記系列3.jpg",
            "img/頑皮日記系列4.jpg",
            "img/頑皮日記系列5.jpg",
            "img/頑皮日記系列6.jpg",
        ]},
  L6:{name:"LABUBU 看不見我系列",
  price:399,
  img:"img/THE MONSTERS 看不見我系列.png",
    imgs:[
            "img/看不見我系列1.jpg",
            "img/看不見我系列2.jpg",
            "img/看不見我系列3.jpg",
            "img/看不見我系列4.jpg",
            "img/看不見我系列5.jpg",
        ]},
  L7:{name:"LABUBU 慵懶瑜伽系列",
  price:399,
  img:"img/THE MONSTERS慵懶瑜伽系列.jpg",
    imgs:[
            "img/慵懶瑜珈系列1.jpg",
            "img/慵懶瑜珈系列2.jpg",
            "img/慵懶瑜珈系列3.jpg",
            "img/慵懶瑜珈系列4.jpg",
            "img/慵懶瑜珈系列5.jpg",
            "img/慵懶瑜珈系列6.jpg",
            "img/慵懶瑜珈系列7.jpg",
            "img/慵懶瑜珈系列8.jpg",
        ]},
  L8:{name:"LABUBU 搪膠毛絨公仔",
  price:399,
  img:"img/THE MONSTERS搪膠毛絨‌公仔.png",
    imgs:[
            "img/搪膠毛絨‌公仔1.jpg",
            "img/搪膠毛絨‌公仔2.jpg",
            "img/搪膠毛絨‌公仔3.jpg",
            ]},

  //stween bean
  s1:{name:"stween bean 小甜豆成長圖鑒系列",
  price:399,
  img:"img/小甜豆成長圖鑒系列.jpg",
    imgs:[
            "img/成長圖鑒系列1.jpg",
            "img/成長圖鑒系列2.jpg",
            "img/成長圖鑒系列3.jpg",
            "img/成長圖鑒系列4.jpg",
            "img/成長圖鑒系列5.jpg",
        ]},
  s2:{name:"stween bean 小甜豆溫泉旅行手辦",
  price:399,
  img:"img/小甜豆溫泉旅行手辦.jpg",
    imgs:[
            "img/溫泉旅行.jpg",
            ]},
  s3:{name:"stween bean 小甜豆定格時光點心盒子系列",
  price:399,
  img:"img/小甜豆定格時光點心盒子系列.jpg",
    imgs:[
            "img/定格時光點心盒子系列1.jpg",
            "img/定格時光點心盒子系列2.jpg",
            "img/定格時光點心盒子系列3.jpg",
            "img/定格時光點心盒子系列4.jpg",
            "img/定格時光點心盒子系列5.jpg",
            "img/定格時光點心盒子系列6.jpg",
            ]},
  s4:{name:"stween bean 小甜豆愛的抱抱系列",
  price:399,
  img:"img/小甜豆愛的抱抱系列.jpg",
    imgs:[
            "img/愛的抱抱系列1.jpg",
            "img/愛的抱抱系列2.jpg",
            "img/愛的抱抱系列3.jpg",
            "img/愛的抱抱系列4.jpg",
            "img/愛的抱抱系列5.jpg",
            "img/愛的抱抱系列6.jpg",
        ]},
  s5:{name:"stween bean 小甜豆有關愛的語言系列",
  price:399,
  img:"img/小甜豆有關愛的語言系列.jpg",
    imgs:[
            "img/有關愛的語言系列1.jpg",
            "img/有關愛的語言系列2.jpg",
            "img/有關愛的語言系列3.jpg",
            "img/有關愛的語言系列4.jpg",
            ]},

  // DIMOO
  d1:{name:"MEGA JUST DIMOO 400% 倚夢而生",
  price:399,
  img:"img/MEGA JUST DIMOO 400% 倚夢而生.png",
    imgs:[
            "img/倚夢而生系列1.jpg",
            "img/倚夢而生系列2.jpg",
        ]},
  d2:{name:"DIMOO 一盞風月系列",
  price:399,
  img:"img/DIMOO一盞風月系列.jpg",
    imgs:[
            "img/一盞風月系列1.jpg",
            "img/一盞風月系列2.jpg",
            "img/一盞風月系列3.jpg",
            "img/一盞風月系列4.jpg",
            "img/一盞風月系列5.jpg",
            "img/一盞風月系列6.jpg",
        ]},
  d3:{name:"DIMOO 動物王國系列",
  price:399,
  img:"img/DIMOO動物王國系列.jpg",
    imgs:[
            "img/動物王國系列1.jpg",
            "img/動物王國系列2.jpg",
            "img/動物王國系列3.jpg",
            "img/動物王國系列4.jpg",
            "img/動物王國系列5.jpg",
            "img/動物王國系列6.jpg",
        ]},
  d4:{name:"DIMOO 在你身邊系列",
  price:399,
  img:"img/DIMOO在你身邊系列.jpg",
    imgs:[
            "img/在你身邊系列1.jpg",
            "img/在你身邊系列2.jpg",
            "img/在你身邊系列3.jpg",
            "img/在你身邊系列4.jpg",
            "img/在你身邊系列5.jpg",
            "img/在你身邊系列6.jpg",
            "img/在你身邊系列7.jpg",
            "img/在你身邊系列8.jpg",
        ]},
  d5:{name:"DIMOO 地球日手辦",
  price:399,
  img:"img/DIMOO地球日手辦.jpg",
    imgs:[
            "img/地球日.jpg",
            ]},
  d6:{name:"DIMOO 限定時光香氛掛件",
  price:399,
  img:"img/DIMOO限定時光系列香氛掛件.jpg",
    imgs:[
            "img/香氛掛件盲盒1.jpg",
            "img/香氛掛件盲盒2.jpg",
            "img/香氛掛件盲盒3.jpg",
            "img/香氛掛件盲盒4.jpg",
            ]},
  d7:{name:"DIMOO 如果今天星期八系列",
  price:399,
  img:"img/DIMOO如果今天星期八系列.png",
    imgs:[
            "img/如果今天星期八系列1.jpg",
            "img/如果今天星期八系列2.jpg",
            "img/如果今天星期八系列3.jpg",
            "img/如果今天星期八系列4.jpg",
            "img/如果今天星期八系列5.jpg",
            "img/如果今天星期八系列6.jpg",
            "img/如果今天星期八系列7.jpg",
            "img/如果今天星期八系列8.jpg",
            "img/如果今天星期八系列9.jpg",
            "img/如果今天星期八系列10.jpg",
            "img/如果今天星期八系列11.jpg",
            "img/如果今天星期八系列12.jpg",
            "img/如果今天星期八系列13.jpg",
        ]},
  d8:{name:"DIMOO 限定時光系列",
  price:399,
  img:"img/DIMOO限定時光系列.png",
    imgs:[
            "img/限定時光系列1.jpg",
            "img/限定時光系列2.jpg",
            "img/限定時光系列3.jpg",
            "img/限定時光系列4.jpg",
            "img/限定時光系列5.jpg",
            "img/限定時光系列6.jpg",
            "img/限定時光系列7.jpg",
            "img/限定時光系列8.jpg",
            "img/限定時光系列9.jpg",
            "img/限定時光系列10.jpg",
            "img/限定時光系列11.jpg",
            "img/限定時光系列12.jpg",
            "img/限定時光系列13.jpg",
        ]}
};

function go711pay(i){
  if (i == 0)
    document.getElementById("pay_method").style.display="none";
  else
    document.getElementById("pay_method").style.display="";
}

function paymentSuccess() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if(cart.length === 0){
    alert("購物車是空的，無法付款！");
    return;
  }

  // 讀取使用者選的付款方式（radio button）
  const payOptionInput = document.querySelector('input[name="payOption"]:checked');
  const payOption = payOptionInput?.value || "";

  // 🔍 debug
  console.log("payOptionInput:", payOptionInput);
  console.log("付款方式 payOption:", payOption);

  // 判斷付款狀態（已付款 / 未付款）
  let paid ;
  if(payOption === "宅配" || payOption === "超商取貨") {
    paid = true;
  } else if(payOption === "貨到付款") {
    paid = false;
  }

  console.log("paid 狀態:", paid);

  const order = {
  id: "ORD" + Date.now(),
  items: cart.map(p => ({
    name: p.name,
    img: p.img,
    price: p.price,
    qty: p.qty
  })),
  quantity: cart.reduce((sum,p)=>sum + p.qty, 0),
  total: cart.reduce((sum,p)=>sum + p.qty * p.price, 0),
  paid: paid,
  statusIndex: 0, // 初始化
  time: new Date().toLocaleString(),
  paymentMethod: payOption
};


  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  localStorage.removeItem("cart");
  updateCartCount();
  renderCart();

  showPage("order-query");
  renderOrders();

  alert("訂單已建立！" + (paid ? "付款已完成。" : "請於付款後完成訂單。"));
}


// 將訂單資料渲染到表格
function renderOrders() {
  const tbody = document.getElementById("orderTableBody");
  if(!tbody) return;

  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  tbody.innerHTML = "";

  if(orders.length === 0){
    tbody.innerHTML = `<tr><td colspan="6">目前沒有訂單紀錄</td></tr>`;
    return;
  }

  const statusLabels = ["商品準備中","出貨","運送","完成"];

  orders.forEach((o, index) => {
    const productHTML = o.items.map(item => `
      <div class="order-item">
        <img src="${item.img}" class="order-img">
        <div class="order-info">
          <div class="order-name">${item.name}</div>
          <small>x ${item.qty}</small>
        </div>
      </div>
    `).join("");

    const progressHTML = statusLabels.map((label, i) => `
      <div class="progress-step ${i <= o.statusIndex ? 'completed' : ''}" 
           onclick="advanceStatus(${index})">
        ${label}
      </div>
    `).join("");

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${productHTML}</td>
      <td>${o.quantity}</td>
      <td>NT$${o.total}</td>
      <td style="color:${o.paid ? 'green':'red'}">${o.paid ? '已付款':'未付款'}</td>
      <td>
        <div class="progress-bar">${progressHTML}</div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const checkoutForm = document.getElementById("checkoutForm");

  checkoutForm.addEventListener("submit", function(e){
    e.preventDefault();
    paymentSuccess();
  });
});

function advanceStatus(orderIndex){
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  if(orderIndex >= orders.length) return;

  const order = orders[orderIndex];
  if(order.statusIndex < 3){
    order.statusIndex += 1;
    localStorage.setItem("orders", JSON.stringify(orders));
    // 動態更新，不整個重渲染
    const row = document.getElementById("orderTableBody").children[orderIndex];
    if(!row) return;
    const steps = row.querySelectorAll(".progress-step");
    steps.forEach((step, i) => {
      if(i <= order.statusIndex){
        step.classList.add("completed");
      } else {
        step.classList.remove("completed");
      }
    });
  }
}





//加入購物車
function addToCart(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let item = {
    name: currentProduct.name,
    price: currentProduct.price,
    img: document.getElementById("detailImg").src, // ⭐ 真正顯示的圖
    qty: 1
  };

  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));

  showPage("cart");
  renderCart();
}

function renderCart(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  let qty = 0;

  if(cart.length === 0){
    document.getElementById("cartList").innerHTML = "<p>購物車是空的</p>";
    document.getElementById("cartTotal").innerText = "總金額：$0";
    document.getElementById("cartQty").innerText = "商品總數：0";
    updateCartCount();
    return;
  }

  let html = "";

  cart.forEach((p,i)=>{
    if(!p.qty) p.qty = 1;

    let sub = p.qty * p.price;
    total += sub;
    qty += p.qty;

    html += `
      <div class="cart-item">
        <img src="${p.img}" class="cart-img">
        <div class="cart-info">
          <h4>${p.name}</h4>
          <p>$${p.price}</p>
          <div class="cart-qty">
            <button onclick="updateQty(${i},-1)">-</button>
            ${p.qty}
            <button onclick="updateQty(${i},1)">+</button>
          </div>
        </div>
        <div>
          <p class="cart-subtotal">$${sub}</p>
          <button onclick="removeCart(${i})">刪除</button>
        </div>
      </div>
    `;
  });

  document.getElementById("cartList").innerHTML = html;
  document.getElementById("cartTotal").innerText = "總金額：$" + total;
  document.getElementById("cartQty").innerText = "商品總數：" + qty;

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateQty(i,delta){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[i].qty += delta;

  if(cart[i].qty <= 0) cart.splice(i,1);

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeCart(i){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(i,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function clearCart(){
  localStorage.removeItem("cart");
  renderCart();
}

//購物車上方自動更新數量
function updateCartCount(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = cart.reduce((sum,p)=>sum + (p.qty || 1),0);
  document.getElementById("cartCount").innerText = total;
}
updateCartCount();
function toggleBg() {
  document.body.classList.toggle("dark");

  const btn = document.getElementById("bgToggle");
  btn.innerText = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

/* 開啟商品詳細頁 */
function goToDetail(productId){
  lastSection = document.querySelector("section.active")?.id || "home";

  currentProduct = products[productId];
  if(!currentProduct) return alert("找不到商品資料");

  document.querySelectorAll("section,.slider")
    .forEach(p => p.classList.remove("active"));
  document.getElementById("product-detail").classList.add("active");

  document.getElementById("detailImg").src = currentProduct.img;
  document.getElementById("detailName").innerText = currentProduct.name;
  document.getElementById("detailPrice").innerText = "$" + currentProduct.price;
}

/* 返回上一頁 */
function goBack(){
  document.querySelectorAll("section,.slider")
    .forEach(p => p.classList.remove("active"));
  document.getElementById(lastSection)?.classList.add("active");
}

let detailIndex = 0;

function changeDetailImg(n){
  if(!currentProduct.imgs) return;
  detailIndex = (detailIndex + n + currentProduct.imgs.length) % currentProduct.imgs.length;
  document.getElementById("detailImg").src = currentProduct.imgs[detailIndex];
}

// 搜尋商品
function searchProducts() {
  const keyword = document.getElementById("searchInput").value.toLowerCase().trim();
  let foundAny = false;

  // 顯示所有商品區塊（除了購物車、結帳、商品詳細頁）
  document.querySelectorAll("section").forEach(sec => {
    if (!["cart", "checkout", "product-detail"].includes(sec.id)) {
      sec.style.display = "block";
    }
  });

  // 搜尋每個商品卡片
  document.querySelectorAll(".card").forEach(card => {
    const title = card.querySelector("h4").innerText.toLowerCase();
    if (keyword !== "" && title.includes(keyword)) {
      card.style.display = "block";
      foundAny = true;
    } else if (keyword === "") {
      card.style.display = "block"; // 空字串 → 全部顯示
    } else {
      card.style.display = "none";
    }
  });

  // 沒輸入文字 → 回到首頁
  if (keyword === "") {
    showPage("home");
    return;
  }

  // 有搜尋結果 → 捲到第一個商品
  if (foundAny) {
    const first = document.querySelector(".card:not([style*='display: none'])");
    first?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
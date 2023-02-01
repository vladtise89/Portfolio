const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
// show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});
// close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//fill in orders from table

Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
                <td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td>${order.paymentStatus}</td>
                <td class="${
                  order.shipping === "Declined"
                    ? "danger"
                    : order.shipping === "Pending"
                    ? "warning"
                    : "success"
                }">${order.shipping}</td>
                <td class="primary">Details</td>
  
  `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});

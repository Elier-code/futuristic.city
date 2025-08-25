var titulo = document.getElementById("text")
var contenedor = document.getElementsByClassName("about_us")[0]
let texto = "In this place, the inhabitants don't have to worry about anything, as it's an advanced world, a world where you can find everything that makes your way of life easier.They start with machines or robots that help you in your work, which facilitate the area of medicine, which facilitate the area of surveillance, then with basic things like machines that make much more practical clothes, or machines that make food.And they advance and advance more and more to make things easier for you and not have to worry about getting something. The issue of money is another aspect that worries us a lot today in this place, the issue of money is no exception, there are applications that allow you to better mobilize your money, there are advanced machines that do not require a high cost, what's more here you do not have to worry about saving money for transportation, (it's free 😜)"
let yaEscrito = false; // 👈 flag de control

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function escribir() {
    if (contenedor.classList.contains("active") && !yaEscrito) {
        yaEscrito = true; // evita repetir
        for (let letra of texto) {
            titulo.append(letra);
            await sleep(55);
        }
        console.log("lo encontré ✅");
    }
}
// 👇 Escucha el scroll y ejecuta escribir()
window.addEventListener("scroll", () => {
    escribir();
});
let pizzas = ["Caprezi", "marguerita", "batatão", "calabresa", "mussarela de búfula com tomate confitado e ervas finas", "calabresa bacon e cheddar"]
console.log("Pizzas: ", pizzas)

let pizzaNao = pizzas.splice(0,2)
console.log("Pizzas removidas: ", pizzaNao)
console.log("Pizzas que sobraram: ", pizzas)
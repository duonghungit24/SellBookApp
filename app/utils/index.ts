
export const utils = {
    displayMoney(value) {
        return (value != null || value != undefined ? value.toString() : "").replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ",",
        )
    },
}
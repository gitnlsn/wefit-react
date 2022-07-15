export const formatCurrency = (currency: number) =>
  `R$ ${Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(currency)}`;

export const formatCurrency = (currency: number) =>
  `R$ ${Intl.NumberFormat("pt-BR").format(currency)}`;

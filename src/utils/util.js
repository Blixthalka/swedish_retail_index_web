const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec'
]


export const formatNumber = (num) => {
  return num?.toLocaleString(undefined, { minimumFractionDigits: 2 })
}

export const formatNumberNoFractions = (num) => {
  return num?.toLocaleString(undefined, { minimumFractionDigits: 0 })
}

export const formatDate = (dateString) => {
  var date = new Date(dateString)
  return date.getDate() + ' ' + months[date.getMonth()] + ', ' + date.getFullYear()
}

export const formatShortDate = (dateString) => {
  var date = new Date(dateString)
  return date.getDate() + ' ' + months[date.getMonth()]
}


export const groupBy = function(values, grouping) {

  return values.reduce(function(rv, value) {

    (rv[grouping(value)] = rv[grouping(value)] || []).push(value);
    return rv;
  }, {});
};
export function thousandSeparator(value) {
    if (!value) return '0';
    const formatNumberInd = new Intl.NumberFormat("id-ID");
    return formatNumberInd.format(value);
  }
  
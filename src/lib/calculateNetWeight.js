function calculateNetWeight(details) {
  if (details['Net Weight']) return details['Net Weight'];

  const grossWeight = parseFloat(details['Gross Weight']);
  const tareWeight = parseFloat(details['Tare Weight']);
  const unit = details['Gross Weight']
    ? details['Gross Weight'].split(' ')[1]
    : '';

  const netWeight = (grossWeight - tareWeight).toFixed(2) || 'NaN';

  return `${netWeight} ${unit}`;
}

export default calculateNetWeight;

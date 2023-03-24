
function calculateTax(income: number, taxYear?: number): number {
    if(taxYear < 2022)
        return income * 1.2;
    if(income < 50_000)
        return income * 1.2;

    return 0;
}

calculateTax(100_000, 2022) 
document.getElementById('connectButton').addEventListener('click', connectMetaMask);

async function connectMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            document.getElementById('account').innerText = `Connected Account: ${account}`;
            checkEligibility(account);
        } catch (error) {
            console.error('Error connecting to MetaMask', error);
        }
    } else {
        alert('MetaMask is not installed. Please install MetaMask to use this feature.');
    }
}

async function checkEligibility(account) {
    // Replace with actual contract interaction to check eligibility
    const eligibility = true; // Dummy value
    if (eligibility) {
        document.getElementById('eligibility').innerText = 'You are eligible for the lottery!';
    } else {
        document.getElementById('eligibility').innerText = 'You are not eligible for the lottery. Hold at least 5000 tokens.';
    }

    // Dummy data for draw stats
    document.getElementById('biWeeklyPool').innerText = '10,000 PPL';
    document.getElementById('semiQuarterlyPool').innerText = '50,000 PPL';
    document.getElementById('annualPool').innerText = '100,000 PPL';

    // Dummy data for last winners
    document.getElementById('lastBiWeeklyWinner').innerText = '0x123...abc';
    document.getElementById('lastSemiQuarterlyWinner').innerText = '0x456...def';
    document.getElementById('lastAnnualWinner').innerText = '0x789...ghi';

    // Dummy data for last distribution dates
    document.getElementById('lastBiWeekly').innerText = '2024-05-01';
    document.getElementById('lastSemiQuarterly').innerText = '2024-04-01';
    document.getElementById('lastAnnual').innerText = '2024-01-01';
}

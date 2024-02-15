const contractABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "candidateId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "name": "CandidateAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "voter",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "candidateId",
                "type": "uint256"
            }
        ],
        "name": "VoteCast",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "VotingEnded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "VotingStarted",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            }
        ],
        "name": "addCandidate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "candidates",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "voteCount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "candidatesCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "endVoting",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllCandidates",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "voteCount",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct Voting.Candidate[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_candidateId",
                "type": "uint256"
            }
        ],
        "name": "getCandidate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_voter",
                "type": "address"
            }
        ],
        "name": "getVotedCandidate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getWinner",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_voter",
                "type": "address"
            }
        ],
        "name": "hasVoted",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "startVoting",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalVotes",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_candidateId",
                "type": "uint256"
            }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "voters",
        "outputs": [
            {
                "internalType": "bool",
                "name": "hasVoted",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "votedCandidateId",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "votingActive",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

let provider;
let signer;
let contract;
let userAccount;
let contractAddress;

const elements = {
    connectWallet: document.getElementById('connectWallet'),
    walletInfo: document.getElementById('walletInfo'),
    walletAddress: document.getElementById('walletAddress'),
    votingInterface: document.getElementById('votingInterface'),
    startVoting: document.getElementById('startVoting'),
    endVoting: document.getElementById('endVoting'),
    addCandidate: document.getElementById('addCandidate'),
    candidateName: document.getElementById('candidateName'),
    votingStatus: document.getElementById('votingStatus'),
    candidatesList: document.getElementById('candidatesList'),
    totalVotes: document.getElementById('totalVotes'),
    winner: document.getElementById('winner'),
    results: document.getElementById('results'),
    loading: document.getElementById('loading')
};

async function init() {
    try {
        const response = await fetch('./src/contract-config.json');
        const config = await response.json();
        contractAddress = config.address;
        console.log('Contract address loaded:', contractAddress);
    } catch (error) {
        console.error('Failed to load contract config:', error);
        showError('Failed to load contract configuration. Please deploy the contract first.');
    }
}

async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            showLoading();
            
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            provider = new ethers.BrowserProvider(window.ethereum);
            signer = await provider.getSigner();
            userAccount = await signer.getAddress();
            
            if (contractAddress) {
                contract = new ethers.Contract(contractAddress, contractABI, signer);
            }
            
            elements.walletAddress.textContent = `${userAccount.slice(0, 6)}...${userAccount.slice(-4)}`;
            elements.connectWallet.classList.add('hidden');
            elements.walletInfo.classList.remove('hidden');
            elements.votingInterface.classList.remove('hidden');
            
            await checkOwnership();
            await updateInterface();
            
            window.ethereum.on('accountsChanged', handleAccountChange);
            window.ethereum.on('chainChanged', () => window.location.reload());
            
            hideLoading();
            showSuccess('Wallet connected successfully!');
        } catch (error) {
            hideLoading();
            showError('Failed to connect wallet: ' + error.message);
        }
    } else {
        showError('Please install MetaMask to use this application');
    }
}

async function handleAccountChange(accounts) {
    if (accounts.length === 0) {
        elements.connectWallet.classList.remove('hidden');
        elements.walletInfo.classList.add('hidden');
        elements.votingInterface.classList.add('hidden');
    } else {
        userAccount = accounts[0];
        elements.walletAddress.textContent = `${userAccount.slice(0, 6)}...${userAccount.slice(-4)}`;
        await checkOwnership();
        await updateInterface();
    }
}

async function checkOwnership() {
    try {
        const owner = await contract.owner();
        const isOwner = owner.toLowerCase() === userAccount.toLowerCase();
        
        const adminSection = document.querySelector('.admin-section');
        if (isOwner) {
            adminSection.style.display = 'block';
        } else {
            adminSection.style.display = 'none';
        }
    } catch (error) {
        console.error('Error checking ownership:', error);
    }
}

async function addCandidate() {
    const name = elements.candidateName.value.trim();
    if (!name) {
        showError('Please enter a candidate name');
        return;
    }
    
    try {
        showLoading();
        const tx = await contract.addCandidate(name);
        await tx.wait();
        
        elements.candidateName.value = '';
        await updateInterface();
        hideLoading();
        showSuccess(`Candidate "${name}" added successfully!`);
    } catch (error) {
        hideLoading();
        showError('Failed to add candidate: ' + error.message);
    }
}

async function startVoting() {
    try {
        showLoading();
        const tx = await contract.startVoting();
        await tx.wait();
        
        await updateInterface();
        hideLoading();
        showSuccess('Voting started successfully!');
    } catch (error) {
        hideLoading();
        showError('Failed to start voting: ' + error.message);
    }
}

async function endVoting() {
    try {
        showLoading();
        const tx = await contract.endVoting();
        await tx.wait();
        
        await updateInterface();
        hideLoading();
        showSuccess('Voting ended successfully!');
    } catch (error) {
        hideLoading();
        showError('Failed to end voting: ' + error.message);
    }
}

async function vote(candidateId) {
    try {
        showLoading();
        const tx = await contract.vote(candidateId);
        await tx.wait();
        
        await updateInterface();
        hideLoading();
        showSuccess('Vote cast successfully!');
    } catch (error) {
        hideLoading();
        showError('Failed to cast vote: ' + error.message);
    }
}

async function updateInterface() {
    if (!contract) return;
    
    try {
        const [votingActive, candidatesCount, totalVotes, hasUserVoted] = await Promise.all([
            contract.votingActive(),
            contract.candidatesCount(),
            contract.totalVotes(),
            contract.hasVoted(userAccount)
        ]);
        
        updateVotingStatus(votingActive);
        await updateCandidatesList(candidatesCount, votingActive, hasUserVoted);
        updateTotalVotes(totalVotes);
        
        if (!votingActive && candidatesCount > 0) {
            await updateWinner();
        } else {
            elements.winner.innerHTML = '';
        }
        
        await updateResults(candidatesCount);
        
    } catch (error) {
        console.error('Error updating interface:', error);
        showError('Error updating interface: ' + error.message);
    }
}

function updateVotingStatus(isActive) {
    elements.votingStatus.className = `status ${isActive ? 'active' : 'inactive'}`;
    elements.votingStatus.textContent = isActive ? 
        '🟢 Voting is currently ACTIVE' : 
        '🔴 Voting is currently INACTIVE';
}

async function updateCandidatesList(candidatesCount, votingActive, hasUserVoted) {
    elements.candidatesList.innerHTML = '';
    
    if (candidatesCount == 0) {
        elements.candidatesList.innerHTML = '<p>No candidates added yet.</p>';
        return;
    }
    
    try {
        const candidates = await contract.getAllCandidates();
        
        candidates.forEach(candidate => {
            const candidateDiv = document.createElement('div');
            candidateDiv.className = 'candidate';
            
            const canVote = votingActive && !hasUserVoted;
            const voteButton = canVote ? 
                `<button class="btn btn-vote" onclick="vote(${candidate.id})">Vote for ${candidate.name}</button>` :
                '';
            
            candidateDiv.innerHTML = `
                <h3>${candidate.name}</h3>
                <div class="votes">Votes: ${candidate.voteCount}</div>
                ${voteButton}
            `;
            
            elements.candidatesList.appendChild(candidateDiv);
        });
    } catch (error) {
        console.error('Error loading candidates:', error);
        elements.candidatesList.innerHTML = '<p>Error loading candidates.</p>';
    }
}

function updateTotalVotes(totalVotes) {
    elements.totalVotes.textContent = `Total Votes Cast: ${totalVotes}`;
}

async function updateWinner() {
    try {
        const [winnerId, winnerName, winnerVotes] = await contract.getWinner();
        elements.winner.innerHTML = `
            <h3>🏆 Winner</h3>
            <p><strong>${winnerName}</strong> with ${winnerVotes} votes</p>
        `;
    } catch (error) {
        console.error('Error getting winner:', error);
        elements.winner.innerHTML = '<p>Error determining winner.</p>';
    }
}

async function updateResults(candidatesCount) {
    elements.results.innerHTML = '';
    
    if (candidatesCount == 0) return;
    
    try {
        const candidates = await contract.getAllCandidates();
        
        candidates
            .sort((a, b) => b.voteCount - a.voteCount)
            .forEach(candidate => {
                const resultDiv = document.createElement('div');
                resultDiv.className = 'result-item';
                resultDiv.innerHTML = `
                    <h4>${candidate.name}</h4>
                    <div class="vote-count">${candidate.voteCount} votes</div>
                `;
                elements.results.appendChild(resultDiv);
            });
    } catch (error) {
        console.error('Error loading results:', error);
    }
}

function showLoading() {
    elements.loading.classList.remove('hidden');
}

function hideLoading() {
    elements.loading.classList.add('hidden');
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;
    
    document.querySelector('.container').insertBefore(errorDiv, document.querySelector('.voting-interface'));
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success';
    successDiv.textContent = message;
    
    document.querySelector('.container').insertBefore(successDiv, document.querySelector('.voting-interface'));
    
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

elements.connectWallet.addEventListener('click', connectWallet);
elements.startVoting.addEventListener('click', startVoting);
elements.endVoting.addEventListener('click', endVoting);
elements.addCandidate.addEventListener('click', addCandidate);

elements.candidateName.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addCandidate();
    }
});

init();
# 🗳️ Blockchain Voting System

A secure, transparent, and decentralized voting system built on Ethereum using Solidity smart contracts and a modern web interface.

## ✨ Features

- **Secure Voting**: Each address can vote only once
- **Transparent Results**: All votes are recorded on the blockchain
- **Admin Controls**: Contract owner can manage candidates and voting sessions
- **Real-time Updates**: Live voting results and status updates
- **Modern UI**: Clean, responsive web interface with MetaMask integration
- **Candidate Management**: Add candidates before starting voting
- **Voting Sessions**: Start and end voting periods as needed

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MetaMask browser extension
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/username/blockchain-voting-system.git
cd blockchain-voting-system
```

2. Install dependencies:
```bash
npm install
```

3. Start a local Hardhat node:
```bash
npm run node
```

4. Deploy the contract (in a new terminal):
```bash
npm run deploy:localhost
```

5. Start the frontend server:
```bash
npm run serve:node
```

6. Open your browser and go to `http://localhost:8000`

7. Connect MetaMask to the local Hardhat network:
   - Network Name: Hardhat Local
   - RPC URL: http://127.0.0.1:8545
   - Chain ID: 31337
   - Currency Symbol: ETH

## 📋 Usage

### For Administrators

1. **Connect Wallet**: Click "Connect Wallet" and approve the connection
2. **Add Candidates**: Enter candidate names and click "Add Candidate"
3. **Start Voting**: Click "Start Voting" to begin the voting session
4. **End Voting**: Click "End Voting" to close voting and reveal results

### For Voters

1. **Connect Wallet**: Connect your MetaMask wallet
2. **View Candidates**: Browse available candidates when voting is active
3. **Cast Vote**: Click "Vote" on your preferred candidate
4. **View Results**: See live vote counts and final results

## 🏗️ Project Structure

```
blockchain-voting-system/
├── contracts/
│   └── Voting.sol              # Main voting smart contract
├── scripts/
│   └── deploy.js              # Deployment script
├── frontend/
│   ├── index.html            # Main HTML file
│   ├── style.css             # Styling
│   └── src/
│       ├── app.js            # Main JavaScript application
│       └── contract-config.json # Contract configuration (auto-generated)
├── hardhat.config.js         # Hardhat configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🔧 Smart Contract

The `Voting.sol` contract includes:

- **Candidate Management**: Add candidates with unique IDs and names
- **Voting Logic**: Secure voting with duplicate prevention
- **Access Control**: Owner-only functions for admin operations
- **Event Logging**: Comprehensive event emission for transparency
- **Results Calculation**: Automatic winner determination

### Key Functions

- `addCandidate(string memory _name)`: Add a new candidate
- `startVoting()`: Begin the voting session
- `endVoting()`: End the voting session
- `vote(uint256 _candidateId)`: Cast a vote for a candidate
- `getWinner()`: Get the winning candidate (after voting ends)
- `getAllCandidates()`: Retrieve all candidates and their vote counts

## 🌐 Deployment

### Local Development

```bash
# Start local blockchain
npm run node

# Deploy to local network
npm run deploy:localhost
```

### Testnet Deployment (Sepolia)

1. Create a `.env` file:
```env
SEPOLIA_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
PRIVATE_KEY=your_private_key_here
```

2. Deploy to Sepolia:
```bash
npm run deploy:sepolia
```

## 🧪 Testing

The project includes comprehensive tests for the smart contract:

```bash
npm test
```

## 🛡️ Security Features

- **Single Vote Per Address**: Prevents vote manipulation
- **Owner Access Control**: Admin functions restricted to contract owner
- **Input Validation**: Comprehensive validation for all inputs
- **Event Logging**: All actions are logged for transparency
- **Voting State Management**: Proper state transitions for voting sessions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Ethereum Foundation for the robust blockchain platform
- Hardhat team for excellent development tools
- MetaMask for seamless wallet integration
- OpenZeppelin for security best practices

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/username/blockchain-voting-system/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about your environment and the issue

---

**Built with ❤️ for transparent democracy**
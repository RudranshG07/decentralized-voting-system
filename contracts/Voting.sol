// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Voting {
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }
    
    struct Voter {
        bool hasVoted;
        uint256 votedCandidateId;
    }
    
    address public owner;
    mapping(uint256 => Candidate) public candidates;
    mapping(address => Voter) public voters;
    uint256 public candidatesCount;
    uint256 public totalVotes;
    bool public votingActive;
    
    event VoteCast(address indexed voter, uint256 indexed candidateId);
    event CandidateAdded(uint256 indexed candidateId, string name);
    event VotingStarted();
    event VotingEnded();
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }
    
    modifier votingIsActive() {
        require(votingActive, "Voting is not active");
        _;
    }
    
    modifier hasNotVoted() {
        require(!voters[msg.sender].hasVoted, "You have already voted");
        _;
    }
    
    constructor() {
        owner = msg.sender;
        votingActive = false;
    }
    
    function addCandidate(string memory _name) public onlyOwner {
        require(!votingActive, "Cannot add candidates while voting is active");
        require(bytes(_name).length > 0, "Candidate name cannot be empty");
        
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
        
        emit CandidateAdded(candidatesCount, _name);
    }
    
    function startVoting() public onlyOwner {
        require(!votingActive, "Voting is already active");
        require(candidatesCount > 0, "No candidates added");
        
        votingActive = true;
        emit VotingStarted();
    }
    
    function endVoting() public onlyOwner {
        require(votingActive, "Voting is not active");
        
        votingActive = false;
        emit VotingEnded();
    }
    
    function vote(uint256 _candidateId) public votingIsActive hasNotVoted {
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate ID");
        
        voters[msg.sender] = Voter(true, _candidateId);
        candidates[_candidateId].voteCount++;
        totalVotes++;
        
        emit VoteCast(msg.sender, _candidateId);
    }
    
    function getCandidate(uint256 _candidateId) public view returns (uint256, string memory, uint256) {
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate ID");
        
        Candidate memory candidate = candidates[_candidateId];
        return (candidate.id, candidate.name, candidate.voteCount);
    }
    
    function getAllCandidates() public view returns (Candidate[] memory) {
        Candidate[] memory allCandidates = new Candidate[](candidatesCount);
        
        for (uint256 i = 1; i <= candidatesCount; i++) {
            allCandidates[i - 1] = candidates[i];
        }
        
        return allCandidates;
    }
    
    function getWinner() public view returns (uint256, string memory, uint256) {
        require(!votingActive, "Voting is still active");
        require(candidatesCount > 0, "No candidates");
        
        uint256 winnerId = 1;
        uint256 highestVotes = candidates[1].voteCount;
        
        for (uint256 i = 2; i <= candidatesCount; i++) {
            if (candidates[i].voteCount > highestVotes) {
                highestVotes = candidates[i].voteCount;
                winnerId = i;
            }
        }
        
        return (winnerId, candidates[winnerId].name, highestVotes);
    }
    
    function hasVoted(address _voter) public view returns (bool) {
        return voters[_voter].hasVoted;
    }
    
    function getVotedCandidate(address _voter) public view returns (uint256) {
        require(voters[_voter].hasVoted, "Voter has not voted");
        return voters[_voter].votedCandidateId;
    }
}
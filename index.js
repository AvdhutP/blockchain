const lighteningHash = (data) => {
  return data + '*';
}


class Block {
  constructor(data, hash, lastHash)  {
    this.data = data;
    this.hash = hash;
    this.lastHash = lastHash;
  }
}

class BlockChain {
  constructor () {
    const genesis = new Block('gen-data','gen-hash','gen-lastHash');

    this.chain = [ genesis ];
  }

  addBlock(data)  {
    const lastHash = this.chain[this.chain.length-1].hash;
    const hash = lighteningHash(data + lastHash);
    this.chain.push(new Block(data,hash,lastHash));
  }
}

const fooblockchain =  new BlockChain();
fooblockchain.addBlock('one');
fooblockchain.addBlock('two');

console.log(fooblockchain);




const { Keypair, Transaction, Connection, PublicKey } = require("@solana/web3.js");
const { getAssociatedTokenAddress, createTransferCheckedInstruction, createAssociatedTokenAccountInstruction } = require("@solana/spl-token");

const {bs58} = require("@coral-xyz/anchor/dist/cjs/utils/bytes");


const owner = "3KK1LNLMPoKsu4C3cjMA1feADDWmWBPs3iMFwHT9BUrcZufWPEPShckazZmpDKDNyLA4faCJ5T8kakihWGMhWqau";

const spltoken = new PublicKey("4QYEwXsTut3ourrNjbHN8DJYLNPVLLZ3WGoYgH9vG9aR");
const sourceWallet = Keypair.fromSecretKey(bs58.decode(owner));

const connection = new Connection("https://api.devnet.solana.com");


function createAccount(pin, amount=0) {
    return {
        pin: pin,
        balance:  amount, 
        checkBalance(pin){
            if(pin === this.pin){
                return `$${this.balance}`; 
            } else {
                return 'Invalid PIN.'
            }
        }, 
        deposit(pin, amount){
            if(pin === this.pin){
                this.balance += amount; 
                return `Successfully deposited $${amount}. Current balance: $${this.balance}.`; 
            } else {
                return 'Invalid PIN.'
            }
        }, 
        withdraw(pin, amount){
            if(pin === this.pin){
                if(this.balance - amount < 0){
                    return "Withdrawal amount exceeds account balance. Transaction cancelled."; 
                } else {
                    this.balance -= amount;
                    return `Successfully withdrew $${amount}. Current balance: $${this.balance}.`; 
                }
            } else {
                return 'Invalid PIN.'; 
            }
        }, 
        changePin(pin, newPin){
            if(pin === this.pin){
                this.pin = newPin; 
                return 'PIN successfully changed!'; 
            } else {
                return 'Invalid PIN'; 
            }
        }
    }

}

module.exports = { createAccount };

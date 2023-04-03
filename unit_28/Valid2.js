class Valid2 extends Valid {
    constructor(email, password) {
        super(email, password);
        super.isValid;
        this.error_message = '';
    }

    validate() {
        
        this.error_message = '';
        super.validate();

        if (this.isValid == false) {
            this.error_message = 'password error';
            return this.isValid;
        } else if (this.email == '') {
            this.error_message = 'mail error';
        } return this.isValid;
    }
}
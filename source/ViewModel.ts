<script src="https://cdn.jsdelivr.net/npm/vue@2"></script> 

const app = new Vue({
    el: '#app',
    data: {
        email: '',
        password: '',
        isLoggedIn: false,
        isRegisterView: true // Zmienna kontrolująca widok (początkowo widok rejestracji)
    },
    methods: {
        toggleView() {
            // Przełącza widok między rejestracją a logowaniem
            this.isRegisterView = !this.isRegisterView;
        },
        login() {
            // Logika logowania (przykładowa)
            if (this.email === 'asd' && this.password === 'asd') {
                this.isLoggedIn = true;
            } else {
                alert('Invalid login credentials');
            }
        },
        register() {
            // Logika rejestracji (przykładowa)
            alert('Account created successfully');
            this.isRegisterView = false; // Przełącza na widok logowania po rejestracji
        }
    }
});
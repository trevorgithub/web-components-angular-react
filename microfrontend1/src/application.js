class Application {
    root = null;
    title = 'Angular Separate Running App';

    bootstrap(root) {
        this.root = root;
        this.root.innerHTML = `<angular-app title="${this.title}"></angular-app>`;
    }
}

function render(Component, element) {
    const component = new Component();
    component.bootstrap(element);
}

document.addEventListener('DOMContentLoaded', () => {
    render(Application, document.getElementById('app'));
});

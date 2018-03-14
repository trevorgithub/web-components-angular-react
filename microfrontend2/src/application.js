class Application {
    root = null;
    title = 'React 15 Separate Running App';

    bootstrap(root) {
        this.root = root;
        this.root.innerHTML = `<react-app title="${this.title}"></react-app>`;
    }
}

function render(Component, element) {
    const component = new Component();
    component.bootstrap(element);
}

document.addEventListener('DOMContentLoaded', () => {
    render(Application, document.getElementById('app'));
});

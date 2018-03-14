class Application {
    root = null;
    title = 'React 0.14 Separate Running App';

    bootstrap(root) {
        this.root = root;
        this.root.innerHTML = `<react-app-old title="${this.title}"></react-app-old>`;
    }
}

function render(Component, element) {
    const component = new Component();
    component.bootstrap(element);
}

document.addEventListener('DOMContentLoaded', () => {
    render(Application, document.getElementById('app'));
});

// javascript\components\creation.js

function createAppComponent() {
  return `
    <h1>Morse Code Translator</h1>
    <section class="translator">
        <div class="translator-section">
            <label for="latin-input">Latin Text</label>
            <textarea
            id="latin-input"
            placeholder="Enter Latin text here"
            ></textarea>
        </div>
        <div class="translator-section">
            <label for="morse-input">Morse Code</label>
            <textarea
            id="morse-input"
            placeholder="Enter Morse code here"
            ></textarea>
        </div>
    </section>
  `;
}

export { createAppComponent };

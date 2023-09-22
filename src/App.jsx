import './App.css'; 



import { computed, signal } from "@preact/signals-react"

const a = signal(5)
const b = signal(7)
const c = computed(() => a + b)

function App() {
  return (
    <div className="container">
      <h1>Suma de A y B</h1>
      <p className='calculo'>
        {a} + {b} = {c}
      </p>
      <button
        className="button"
        onClick={() => (a.value = 3)}
      >
        Cambiar valor de A
      </button>
    </div>
  );
}
export default App




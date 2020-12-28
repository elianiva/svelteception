<style>
button {
  grid-column: 2/3;
  grid-row: 1/3;
  padding: 0.5rem 2rem;
  justify-self: flex-end;
  border: none;
  color: #ffffff;
  background-image: linear-gradient(to bottom right, #cc0f7f, #cb489b);
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0 0.5rem 1rem rgba(203, 69, 154, 0.25);
}

button:hover {
  filter: brightness(0.95);
}
</style>

<button><slot /></button>

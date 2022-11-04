import html from "../core.js";
import { connect } from "../store.js";
function Footer({ todos, filter, filters }) {
  console.log(filter);
  return html`
    <footer class="footer">
      <span class="todo-count"
        ><strong>${todos.filter(filters.active).length}</strong> item left</span
      >
      <ul class="filters">
        ${Object.keys(filters).map(
          (type) => html`
            <li>
              <a
                class="${filter === type && "selected"}"
                href="#"
                onclick="dispatch('swichFilter','${type}')"
                >${type[0].toLocaleUpperCase() + type.slice(1)}</a
              >
            </li>
          `
        )}
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      ${todos.filter(filters.completed).length > 0 &&
      html`
        <button class="clear-completed" onclick = "dispatch('clearCompleted')">Clear completed </button>
        `}
      >
    </footer>
  `;
}
export default connect()(Footer);
<template>
  <div class="app-table">
    <div class="card shadow-sm border-0">
      <div class="card-header bg-white d-flex align-items-center justify-content-between py-3">
        <div>
          <h5 class="card-title mb-0">{{ title }}</h5>
          <p v-if="subtitle" class="card-subtitle text-muted mt-1 mb-0">{{ subtitle }}</p>
        </div>
        <slot name="actions"></slot>
      </div>
      
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-hover mb-0">
            <thead class="table-light">
              <tr>
                <th v-for="column in columns" :key="column.key" class="px-4" :style="column.width ? `width: ${column.width}` : ''">
                  {{ column.label }}
                </th>
                <th v-if="hasRowActions || $slots.rowActions" class="px-4 text-end">Actions</th>
              </tr>
            </thead>
            
            <tbody>
              <tr v-if="loading">
                <td :colspan="columns.length + (hasRowActions ? 1 : 0)" class="text-center py-5">
                  <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <p class="mt-2 text-muted">Loading data...</p>
                </td>
              </tr>
              <tr v-else-if="items.length === 0">
                <td :colspan="columns.length + (hasRowActions ? 1 : 0)" class="text-center py-5">
                  <div class="empty-state">
                    <i class="bi bi-inbox text-muted display-1"></i>
                    <h5 class="mt-3">{{ emptyStateText }}</h5>
                    <p class="text-muted">{{ emptyStateSubtext }}</p>
                  </div>
                </td>
              </tr>
              <tr v-for="(item, index) in paginatedItems" :key="item.id || index">
                <td v-for="column in columns" :key="column.key" class="px-4">
                  <slot :name="`cell-${column.key}`" :item="item" :value="item[column.key]">
                    {{ item[column.key] }}
                  </slot>
                </td>
                <td v-if="hasRowActions || $slots.rowActions" class="px-4 text-end">
                  <slot name="rowActions" :item="item">
                    <div class="btn-group">
                      <button v-for="action in rowActions" :key="action.key" type="button" class="btn btn-sm btn-outline-secondary" @click="handleRowAction(action.key, item)">
                        <i v-if="action.icon" :class="`bi bi-${action.icon}`"></i>
                        <span v-if="action.label">{{ action.label }}</span>
                      </button>
                    </div>
                  </slot>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    title: String,
    subtitle: String,
    columns: Array,
    items: Array,
    loading: Boolean,
    emptyStateText: { type: String, default: 'No items found' },
    emptyStateSubtext: { type: String, default: '' },
    rowActions: Array,
    pagination: Boolean,
    itemsPerPage: { type: Number, default: 10 }
  },
  data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    hasRowActions() {
      return this.rowActions && this.rowActions.length > 0;
    },
    paginatedItems() {
      if (!this.pagination) return this.items;
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.items.slice(start, start + this.itemsPerPage);
    }
  },
  methods: {
    handleRowAction(actionKey, item) {
      this.$emit('row-action', { actionKey, item });
    }
  }
};
</script>

<style scoped>
.app-table {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.card {
  border-radius: 8px;
  overflow: hidden;
}

.card-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.card-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.search-container {
  width: 240px;
}

.search-container .form-control {
  height: 38px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

.search-container .input-group-text {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}

.search-container .form-control:focus {
  box-shadow: none;
}

table {
  margin-bottom: 0;
}

th {
  font-weight: 600;
  color: #495057;
  font-size: 0.875rem;
}

td {
  vertical-align: middle;
  font-size: 0.875rem;
}

.sortable-column {
  cursor: pointer;
  user-select: none;
}

.empty-state {
  padding: 2rem 0;
  text-align: center;
}

.pagination {
  margin-bottom: 0;
}

.pagination .page-link {
  border-radius: 4px;
  margin: 0 2px;
}
</style>
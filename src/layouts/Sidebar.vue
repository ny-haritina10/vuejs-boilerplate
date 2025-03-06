<template>
  <div class="sidebar bg-dark text-white" :class="{ 'collapsed': isCollapsed }">
    <div class="sidebar-header d-flex align-items-center justify-content-between p-3">
      <div class="d-flex align-items-center">
        <i class="bi bi-grid-1x2-fill me-2"></i>
        <span class="brand-name" v-if="!isCollapsed">Admin Panel</span>
      </div>
      <button class="btn btn-link text-white p-0" @click="toggleSidebar">
        <i class="bi" :class="isCollapsed ? 'bi-chevron-right' : 'bi-chevron-left'"></i>
      </button>
    </div>
    
    <div class="sidebar-menu p-2">
      <ul class="nav flex-column">
        <li class="nav-item mb-2" v-for="(item, index) in menuItems" :key="index">
          <a class="nav-link d-flex align-items-center text-white" :href="item.link">
            <i class="bi" :class="item.icon"></i>
            <span class="ms-2" v-if="!isCollapsed">{{ item.name }}</span>
          </a>
        </li>
        
        <!-- Dropdown Example -->
        <li class="nav-item mb-2">
          <a class="nav-link d-flex align-items-center text-white" href="#" @click.prevent="toggleDropdown">
            <i class="bi bi-gear"></i>
            <span class="ms-2" v-if="!isCollapsed">Settings</span>
            <i class="bi ms-auto" :class="isDropdownOpen ? 'bi-chevron-up' : 'bi-chevron-down'" v-if="!isCollapsed"></i>
          </a>
          <ul v-if="isDropdownOpen && !isCollapsed" class="nav flex-column ps-3">
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Account</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Security</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    
    <div class="sidebar-footer mt-auto p-3" v-if="!isCollapsed">
      <div class="user-info d-flex align-items-center">
        <div class="avatar bg-primary rounded-circle d-flex align-items-center justify-content-center">
          <span>{{ userInitials }}</span>
        </div>
        <div class="ms-2">
          <p class="mb-0 fw-bold">{{ user.name }}</p>
          <small>{{ user.role }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    user: {
      type: Object,
      default: () => ({
        name: 'John Doe',
        role: 'Administrator'
      })
    }
  },
  data() {
    return {
      isCollapsed: false,
      isDropdownOpen: false,
      menuItems: [
        { name: 'Dashboard', icon: 'bi-speedometer2', link: '#' },
        { name: 'Users', icon: 'bi-people-fill', link: '#' },
        { name: 'Products', icon: 'bi-box-seam', link: '#' },
        { name: 'Orders', icon: 'bi-cart-check', link: '#' },
        { name: 'Reports', icon: 'bi-graph-up', link: '#' }
      ]
    }
  },
  computed: {
    userInitials() {
      return this.user.name
        .split(' ')
        .map(name => name.charAt(0))
        .join('')
        .toUpperCase();
    }
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
      this.$emit('sidebar-toggle', this.isCollapsed);
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }
}
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 250px;
  transition: all 0.3s ease;
}

.sidebar.collapsed {
  width: 60px;
}

.sidebar-header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.brand-name {
  font-weight: 600;
}

.nav-link {
  border-radius: 6px;
  padding: 0.75rem 1rem;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.avatar {
  width: 36px;
  height: 36px;
  color: white;
}

.sidebar-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
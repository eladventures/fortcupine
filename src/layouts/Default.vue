<template>
  <div class="fixed top-0 z-50 w-full bg-white">
    <div
      class="container flex items-center justify-between h-16 max-w-6xl mx-auto"
    >
      <!-- Left: Logo -->
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Back to homepage"
        class="flex items-center p-2"
      >
        <img
          src="../assets/images/fortcupine-logo-small.png"
          alt="Fortcupine Logo"
          class="object-contain w-auto h-12"
        />
      </a>

      <!-- Right: Navigation Menu -->
      <ul class="flex items-center space-x-3 lg:flex">
        <li class="flex">
          <a
            rel="noopener noreferrer"
            href="#health-apps"
            class="flex items-center px-4 -mb-1"
            >Health Apps</a
          >
        </li>
        <li class="flex">
          <a
            rel="noopener noreferrer"
            href="#true-privacy"
            class="flex items-center px-4 -mb-1"
            >True Privacy</a
          >
        </li>
        <li class="flex">
          <a
            rel="noopener noreferrer"
            href="#fort-1"
            class="flex items-center px-4 -mb-1"
            >Fort 1</a
          >
        </li>
        <li class="flex">
          <a
            rel="noopener noreferrer"
            href="#why-fortcupine"
            class="flex items-center px-4 -mb-1"
            >Why Fortcupine</a
          >
        </li>
        <li class="flex">
          <a
            rel="noopener noreferrer"
            href="#local-first"
            class="flex items-center px-4 -mb-1"
            >What is Local-First</a
          >
        </li>
        <li class="flex">
          <a
            rel="noopener noreferrer"
            href="#our-story"
            class="flex items-center px-4 -mb-1"
            >Our Story</a
          >
        </li>
      </ul>
    </div>
  </div>

  <!-- Adding padding to the content to avoid overlapping with the navbar -->
  <div class="pt-16">
    <slot />
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

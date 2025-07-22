<script setup lang="ts">
import { ref } from "vue";
import closeSrc from "../assets/icons/icon-close.svg";
import menuSrc from "../assets/icons/icon-hamburger.svg";
import logoSrc from "../assets/icons/logo.svg";

const menuOpen = ref(false);
</script>

<template>
  <header class="header">
    <button class="header__menu menu-button" @click="menuOpen = true">
      <img :src="menuSrc" />
    </button>
    <a class="header__logo" href="#">
      <img class="header__logo" :src="logoSrc" alt="room logo" />
    </a>
    <nav class="header__nav nav">
      <div
        ref="nav__wrapper"
        :class="['nav__wrapper', { 'nav-opened': menuOpen }]"
      >
        <button class="nav__close-button" @click="menuOpen = false">
          <img :src="closeSrc" />
        </button>
        <ul class="nav__list">
          <li class="nav__list-item">
            <a class="nav__link" href="#" @click="menuOpen = false">Home</a>
          </li>
          <li class="nav__list-item">
            <a class="nav__link" href="#" @click="menuOpen = false">Shop</a>
          </li>
          <li class="nav__list-item">
            <a class="nav__link" href="#" @click="menuOpen = false">About</a>
          </li>
          <li class="nav__list-item">
            <a class="nav__link" href="#" @click="menuOpen = false">Contact</a>
          </li>
        </ul>
      </div>
      <div
        :class="['nav__overlay', { 'nav-opened': menuOpen }]"
        @click="menuOpen = false"
      ></div>
    </nav>
  </header>
</template>

<style lang="css" scoped>
.header {
  position: absolute;
  z-index: 1;
  top: 3rem;
  left: 1.5rem;
  right: 1.5rem;

  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;

  @media (min-width: 48rem) {
    left: 4rem;
    right: 4rem;
  }

  @media (min-width: 60rem) {
    top: 4rem;
    display: flex;
    gap: 3.5rem;

    .header__menu {
      display: none;
    }

    .header__logo {
      margin-inline: 0;
    }
  }
}

.header__menu {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
}

.header__logo {
  margin-inline: auto;
  grid-row: 1 / 2;
  grid-column: 1 / -1;
}

.nav {
  position: fixed;
  inset: 0;
  display: grid;
  grid-template-rows: auto 1fr;
  pointer-events: none;

  @media (min-width: 60rem) {
    position: unset;
  }
}

.nav__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 3rem;
  padding-inline: 1.5rem;
  background-color: var(--color-neutral-0);
  color: var(--color-neutral-900);
  line-height: 1;
  text-transform: lowercase;

  pointer-events: all;

  transition: transform 300ms ease-in-out;
  transform: translateX(-100%);

  @media (min-width: 48rem) {
    padding-inline: 4rem;
  }

  @media (min-width: 60rem) {
    transition: unset;
    transform: unset;
    background: unset;
    padding: unset;
    color: var(--color-neutral-0);
  }
}

.nav_wrapper.transitioning {
}

.nav__close-button {
  @media (min-width: 60rem) {
    display: none;
  }
}

.nav__overlay {
  pointer-events: all;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translateX(100%);
  transition: background-color 200ms ease-in-out, transform 300ms ease-in-out;
}

.nav__overlay.nav-opened {
  background-color: rgba(0, 0, 0, 0.5);
  transform: translateX(0);
}

.nav__wrapper.nav-opened {
  transform: translateX(0);
}

.nav__list {
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
}

.menu-button {
  padding: 0.5rem;
  cursor: pointer;
}
</style>

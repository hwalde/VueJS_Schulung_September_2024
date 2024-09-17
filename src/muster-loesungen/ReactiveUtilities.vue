<template>
  <div>
    <h2>Beispiel für ref</h2>
    <p>Zähler: {{ counter }}</p>
    <button @click="incrementCounter">Erhöhen</button>
    <p>Name: {{ name }}</p>
    <button @click="changeName('Alice')">Name ändern</button>

    <h2>Beispiel für reactive</h2>
    <p>Name: {{ person.name }}</p>
    <p>Alter: {{ person.age }}</p>
    <p>Hobbys: {{ person.hobbies.join(', ') }}</p>
    <p>Subname: {{ person.deeper.subname }}</p>
    <button @click="updatePerson">Person aktualisieren</button>

    <h2>Computed</h2>
    <p>{{counterPlusName}}</p>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive, computed, watch} from 'vue';

const counter = ref(0);
const name = ref<string>('John Doe');

const counterPlusName = computed(() => `${counter.value} ${name.value}`);

counter.value = counter.value + 1;

// Beispiel für die Verwendung von `reactive`
const person = reactive({
  name: 'Jane Doe',
  age: 30,
  hobbies: ['reading', 'coding'],
  deeper: {
    subname: 'Max'
  }
});

// shallowReactive und shallowRef erkennt nur Änderungen in der obersten Ebene

// Funktion zum Erhöhen des Zählers
function incrementCounter() {
  counter.value++;
}

// Funktion zum Ändern des Namens
function changeName(newName: string) {
  name.value = newName;
}

// Funktion zum Ändern der Person
function updatePerson() {
  //person.name = 'John Smith';
  // person.age = 35;
  //person.hobbies.push('gaming');
  person.deeper.subname = 'John';
}

// watch primitive
watch(counter, (newValue, oldValue) => {
  if(counter.value === 10) {
    counter.value = 0;
  }
  console.log(`counter hat sich von ${oldValue} auf ${newValue} geändert.`);
});

// watch entire object
watch(person, () => {
  console.log(`person hat sich geändert.`);
}, { deep: true } );
// { deep: true }  = beobachte nicht nur die oberste Ebene von meiner reaktiven Variable sondern geh in die Tiefe

// watch ein feld des objects
watch(() => person.deeper.subname, () => {
  console.log(`person.deeper.subname hat sich geändert.`);
});

</script>



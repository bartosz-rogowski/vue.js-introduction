<script>
export default {
  data() {
    return {
      message: '',
      message2: '',
      checked: true,
      checkedNames: [],
      selected: '',
      picked: '',
      selected2: []
    }
  }
}
</script>

<template>
  <!-- simple text -->
  <p>Message is: {{ message }}</p>
	<input v-model="message" placeholder="edit me" />
  <br>
  
  <!-- multiline -->
  <span>Multiline message is:</span>
  <p style="white-space: pre-line;">{{ message2 }}</p>
  <textarea v-model="message2" placeholder="add multiple lines"></textarea>
  <br> <br> 
  <!-- check -->
  <input type="checkbox" id="checkbox" v-model="checked" />
	<label for="checkbox">{{ checked }}</label>
  <br><br>
  <!-- checkbox with array -->
  <div>Checked names: {{ checkedNames }}</div>

  <input type="checkbox" id="Radoslaw" value="Radoslaw" v-model="checkedNames">
  <label for="Radoslaw">Radoslaw</label>

  <input type="checkbox" id="Filip" value="Filip" v-model="checkedNames">
  <label for="Filip">Filip</label>

  <input type="checkbox" id="Marian" value="Marian" v-model="checkedNames">
  <label for="Marian">Marian</label>
  <br> <br>
  <div>Picked: {{ picked }}</div>

  <!-- radio button -->
  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>

  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>
  <br> <br>
  <div>Selected: {{ selected }}</div>
	
  <!-- selected -->
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <br><br>
  
  <div>Selected: {{ selected2 }}</div>

  <select v-model="selected2" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
</template>
<script>
  import { onMount } from 'svelte'
  export let name
  export let message
  onMount(async () => {
    let data = await (await fetch('/api', {
      headers: {
        mode: 'no-cors'
      }
    })).json()
    message = data.msg
    console.log('MESSAGE: ', message)
  })

  async function test() {
    let data = await (await fetch('/test')).json()
    let message = data.msg
    console.log('MESSAGE: ', message)
    alert('ok: ' + message)
  }
</script>

<main>
  <h1>Hello {name}!</h1>
  <h2>{message}</h2>
  <h3>Change me!</h3>
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  <button on:click={test}>test</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

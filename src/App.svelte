<script>
    import HomePage from "./pages/HomePage.svelte";
    import {Route, Router} from "svelte5-router";
    import CounterPage from "./pages/CounterPage.svelte";
    import TemperatureCalculatorPage from "./pages/TemperatureCalculatorPage.svelte";
</script>


<section id="center">
    <Router>
        <Route path="/" component={HomePage}></Route>
        <Route path="/counter" component={CounterPage}></Route>
        <Route path="/temperature" component={TemperatureCalculatorPage}></Route>
    </Router>
</section>

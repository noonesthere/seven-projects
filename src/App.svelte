<script>
    import HomePage from "./pages/HomePage.svelte";
    import {Route, Router} from "svelte5-router";
    import CounterPage from "./pages/CounterPage.svelte";
    import TemperatureCalculatorPage from "./pages/TemperatureCalculatorPage.svelte";
    import NotFoundPage from "./pages/NotFoundPage.svelte";
    import FlightBookerPage from "./pages/FlightBookerPage.svelte";
</script>


<section id="center">
    <Router>
        <Route path="/" component={HomePage}></Route>
        <Route path="/counter" component={CounterPage}></Route>
        <Route path="/temperature" component={TemperatureCalculatorPage}></Route>
        <Route path="/flightbooker" component={FlightBookerPage}></Route>
        <Route component={NotFoundPage}></Route>
    </Router>
</section>

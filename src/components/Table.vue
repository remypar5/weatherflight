<template>
    <table>
        <thead>
            <tr>
                <th>Location</th>
                <th>Temperature</th>
                <th>Conditions</th>
                <th>Ticket</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="location in data.locations" :key="location.id">
                <th>{{ location.name }}</th>
                <td>{{ location.temperature }}&deg;C</td>
                <td>{{ location.weatherType }}</td>
                <td>&euro; {{ location.flightPrice }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        data: Object,
    }
}
</script>

export default defineEventHandler(async (event) => {
  const url = `http://localhost:1337/api/events?populate=*`;

  const response: { data: any[] } = await $fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const info = response.data.map((event) => {
    const eventDate = new Date(event.date);
    const date = eventDate.toISOString().split('T')[0];
    const time = eventDate.toISOString().split('T')[1].split('.')[0];

    return {
      name: event.name,
      location: event.location,
      date: date,
      time: time,
      photo: `http://localhost:1337${event.photo.url}`,
    };
  });

  return info;
});

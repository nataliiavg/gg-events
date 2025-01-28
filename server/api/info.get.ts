export default defineEventHandler(async (event) => {
  const baseURL = "http://localhost:1337";
  const url = `${baseURL}/api/events?populate=*`;

  const response: { data: any[] } = await $fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const info = response.data.map((event) => {
    const eventDate = new Date(event.date);
    const date = eventDate.toLocaleDateString('en-IE', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
    const time = eventDate.toLocaleTimeString('en-IE', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });

    return {
      name: event.name,
      location: event.location,
      date: date,
      time: time,
      photo: `${baseURL}${event.photo.url}`,
    };
  });

  return info;
});

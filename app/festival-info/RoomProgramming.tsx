"use client";

import { useState } from "react";

type FloorId = "2" | "3" | "4";
type Room = { number: string; title: string; organizer: string; time?: string; detail: string };

const floors: Record<FloorId, { label: string; rooms: Room[] }> = {
  "2": {
    label: "Floor 2",
    rooms: [
      {
        number: "UC 225",
        title: "Smash Tournament",
        organizer: "Gryphon Gaming",
        time: "Signup 11:00 AM–1:30 PM · Starts 2:00 PM",
        detail: "Join the Smash tournament. Sign up between 11:00 AM and 1:30 PM; play begins at 2:00 PM.",
      },
      {
        number: "UC 224 / 222",
        title: "Free Gaming",
        organizer: "Gryphon Gaming",
        detail: "Drop in for free gaming. Open to all ages.",
      },
    ],
  },
  "3": {
    label: "Floor 3",
    rooms: [
      {
        number: "UC 332",
        title: "Vietnamese Paper Crafts Workshop",
        organizer: "GVSA",
        time: "12:00–3:00 PM",
        detail: "Make paper Áo Dài, Lì xì envelopes, and lanterns. Follow the provided instructions or create your own designs. Enjoy Vietnamese music and Paris by Night performances.",
      },
      {
        number: "UC 334",
        title: "Gaming Trivia",
        organizer: "UoG Game Dev Club",
        time: "2:00–4:00 PM",
        detail: "Gaming trivia; all developers and players are welcome.",
      },
    ],
  },
  "4": {
    label: "Floor 4",
    rooms: [
      {
        number: "UC 430",
        title: "Wii Games and Tournament",
        organizer: "UoG Wii Club",
        detail: "50/50 Swordfighting (Wii Sports Resort) and Mario Kart Wii, with a cash prize. Casual freeplay is also available.",
      },
      {
        number: "UC 442",
        title: "Ākēdo Moe Character Cafe",
        organizer: "Ākēdo",
        detail: "Cafe interactions and activities, food, drinks, desserts, and guest appearances. Menu coming soon.",
      },
    ],
  },
};

export default function RoomProgramming() {
  const [floor, setFloor] = useState<FloorId>("2");
  const [selectedRoom, setSelectedRoom] = useState<string>(floors["2"].rooms[0].number);
  const activeFloor = floors[floor];
  const activeRoom = activeFloor.rooms.find((room) => room.number === selectedRoom) ?? activeFloor.rooms[0];

  function chooseFloor(nextFloor: FloorId) {
    setFloor(nextFloor);
    setSelectedRoom(floors[nextFloor].rooms[0].number);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
      <div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Choose a floor">
          {(Object.keys(floors) as FloorId[]).map((id) => (
            <button
              key={id}
              type="button"
              aria-pressed={floor === id}
              onClick={() => chooseFloor(id)}
              className={`focus-visible:ring-brand-orange rounded-full border-2 px-5 py-2 font-bold focus-visible:ring-4 ${floor === id ? "border-brand-purple bg-brand-purple text-white" : "border-brand-purple/30 bg-white text-brand-purple hover:border-brand-purple"}`}
            >
              {floors[id].label}
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-black/60">
          Room layout is schematic only—not a real floorplan or representation of room positions.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-2" aria-label={`${activeFloor.label} room schematic`}>
          {activeFloor.rooms.map((room) => (
            <button
              key={room.number}
              type="button"
              aria-pressed={activeRoom.number === room.number}
              onClick={() => setSelectedRoom(room.number)}
              onMouseEnter={() => setSelectedRoom(room.number)}
              onFocus={() => setSelectedRoom(room.number)}
              className={`focus-visible:ring-brand-orange min-h-28 rounded-2xl border-2 p-4 text-left transition-colors focus-visible:ring-4 ${activeRoom.number === room.number ? "border-brand-orange bg-[#fff6eb] shadow-md" : "border-brand-purple/25 bg-[#f8f2ff] hover:border-brand-purple"}`}
            >
              <span className="text-brand-orange text-sm font-bold">{room.number}</span>
              <span className="font-brand text-brand-purple mt-1 block text-lg leading-tight font-bold">{room.title}</span>
            </button>
          ))}
        </div>
      </div>
      <article aria-live="polite" className="border-brand-purple/25 rounded-2xl border bg-white p-6 shadow-sm">
        <p className="text-brand-orange text-sm font-bold uppercase">{activeFloor.label} · {activeRoom.number}</p>
        <h3 className="font-brand text-brand-purple mt-2 text-2xl font-bold">{activeRoom.title}</h3>
        <p className="mt-2 font-semibold text-black/75">{activeRoom.organizer}</p>
        {activeRoom.time && <p className="text-brand-purple mt-2 font-bold">{activeRoom.time}</p>}
        <p className="mt-4 leading-relaxed text-black/75">{activeRoom.detail}</p>
      </article>
    </div>
  );
}

interface Seat {
    id: string;
    seatNumber: string;
    isBooked: boolean;
}

function findSeat(seats: readonly Seat[], seatId: string): Seat | undefined {
    return seats.find((seat) => seat.id === seatId);
}

function bootstrap(): void {
    const seats: Seat[] = [
        {
            id: '1',
            seatNumber: 'A1',
            isBooked: false,
        },
        {
            id: '2',
            seatNumber: 'A2',
            isBooked: true,
        },
    ];

    const seat = findSeat(seats, '1');

    if (!seat) {
        console.error('Seat not found');
        process.exit(1);
    }
    const emptySeats: Seat[] = [];

    const firstSeat = emptySeats[0];
    async function saveSeat(): Promise<void> {
        console.log('Saving...');
    }


    console.log('Application Started');
    console.log('Seat:', seat.seatNumber);
    console.log(seat.seatNumber);
    console.log(firstSeat.seatNumber);
}


saveSeat();

bootstrap();



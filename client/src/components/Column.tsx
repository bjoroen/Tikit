import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ColumnProps } from './Models';
import Ticket from './Ticket';

export default function Column(props: ColumnProps) {
    return (
        <div className="bg-dark-blue min-h-full flex flex-col">
            <h3 className="text-green text-center p-2 text-2xl">{props.title}</h3>
            <Droppable droppableId={props.id}>
                {(provided, snapshot) => {
                    const ticketContainerStyleClasses = "flex-grow min-h-90 transition-colors duration-300 ease-in-out";
                    return (
                        <div 
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={`${ticketContainerStyleClasses} ${snapshot.isDraggingOver ? "bg-hightlight-blue": ""}`}
                        >
                            {props.tickets?.map((ticket, index) => (
                                <Ticket key={ticket.id} id={ticket.id} title={ticket.title} tags={ticket.tags} date={ticket.date} index={index} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                }
                
            </Droppable>
        </div>
    );
}